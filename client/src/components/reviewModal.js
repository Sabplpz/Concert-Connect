import React from "react";
import userIcon from "../assets/icons/user.png";
import Avatar from "../utils/avatar";
import { useQuery, useMutation } from "@apollo/client";
import { useContext, useState } from "react";
import { idContext } from "./showReview";
import { QUERY_REVIEW } from "../utils/queries";
import { ADD_COMMENT, LIKE, UNLIKE } from "../utils/mutations";

function ReviewModal({ isOpen, onClose }) {
  const reviewId = useContext(idContext);
  const [formState, setFormState] = useState({
    text: "",
    id: "",
  });

  // MUTATION FOR ADD COMMENT
  const [addComment, { error: addCommentError }] = useMutation(ADD_COMMENT);
  const [like, { error: likeError }] = useMutation(LIKE);
  const [unlike, { error: unlikeError }] = useMutation(UNLIKE);

  // QUERY FOR REVIEW
  const {
    loading: loadingReview,
    error,
    data: reviewData,
  } = useQuery(QUERY_REVIEW, {
    variables: { id: reviewId },
  });

  if (loadingReview) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (unlikeError) return <p>Error: {unlikeError.message}</p>;

  const review = reviewData?.review || [];
  const comments = review.comments;
  const likes = review.likes;

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      id: reviewId,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await addComment({ variables: { ...formState } });
      setFormState({
        text: "",
        id: "",
      });
    } catch (e) {
      console.error(e);
    }
  };

  const likeReview = async () => {
    try {
      await like({ variables: { reviewId: reviewId } });
    } catch (e) {
      console.error(e);
    }
  };

  const unlikeReview = async () => {
    try {
      await unlike({ variables: { reviewId: reviewId } });
    } catch (e) {
      console.error(e);
    }
  };

  const handleLikes = () => {
    let username = Avatar.getUsername();
    let usersArray;
    if (likes !== null) {
      usersArray = likes.users;
    } else {
      usersArray = [];
    }
    if (usersArray.indexOf(username) >= 0) {
      return (
        <button
          className="btn btn-outline btn-secondary btn-sm mr-3"
          onClick={() => unlikeReview()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      );
    } else {
      return (
        <button
          className="btn btn-outline btn-primary btn-sm mr-3"
          onClick={() => likeReview()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      );
    }
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const handleLikesCount = () => {
    if (likes == null) {
      return 0;
    } else {
      let count = likes.likes_count;
      return count;
    }
  };

  if (!isOpen) return null;
  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="bg-black">
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          onClick={() => onClose()}
        >
          ✕
        </button>
        {/* user post */}
        <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
          <li>
            <a href="#" className="block items-center p-3 sm:flex ">
              <img
                className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                src={userIcon}
                alt="User Avatar"
              />
              <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                <div className="text-neutral-content text-base">
                  <span className="text-lg text-secondary dark:text-secondary">
                    {review.username}
                  </span>{" "}
                  reviwed a/an {review.type} - {review.title} ={" "}
                  {review.starRating} stars baby!
                </div>
                <div className="text-sm font-normal">{review.text}</div>
                <span className="inline-flex items-center mb-3 text-xs font-normal text-gray-500">
                  {handleLikesCount()} likes
                </span>
                <div className="block items-center mt-1">{handleLikes()}</div>
              </div>
            </a>
          </li>
        </ol>
        {/* user comment */}
        {comments.map((comment) => (
          <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
            <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
              <li>
                <a href="#" className="block items-center p-3 sm:flex ">
                  <img
                    className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                    src={userIcon}
                    alt="Jese Leos image"
                  />
                  <div className="text-bg-neutral-content ">
                    <div className="text-neutral-content text-sm">
                      <span className="text-sm text-secondary dark:text-secondary">
                        {comment.username}
                      </span>{" "}
                      commented
                    </div>
                    <span className="text-base font-normal">
                      {comment.text}
                    </span>
                  </div>
                </a>
              </li>
            </ol>
          </div>
        ))}

        {/* add comment form */}
        <div className="join w-full">
          <form onSubmit={handleFormSubmit}>
            <input
              className="input input-primary w-full rounded-lg shadow-sm text-sm join-item"
              type="text"
              name="text"
              value={formState.text}
              onChange={handleFormChange}
              placeholder="Add Comment"
            />

            <button type="submit" className="join-item btn">
              <span className="end-0 inset-y-0 grid place-content-center px-4">
                <svg
                  fill="none"
                  className="h-6 w-5 text-gray-500"
                  viewBox="0 0 32 32"
                  version="1.1"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M30.535 28.373c-1.809-1.73-3.119-3.968-3.7-6.485l-0.017-0.088c1.782-1.921 2.888-4.489 2.932-7.315l0-0.009c0-6.686-6.393-12.124-14.25-12.124s-14.25 5.438-14.25 12.124 6.393 12.125 14.25 12.125c0.004 0 0.009 0 0.014 0 1.883 0 3.691-0.319 5.374-0.906l-0.114 0.035c2.528 1.962 5.604 3.343 8.96 3.887l0.115 0.015c0.046 0.010 0.098 0.015 0.152 0.016h0c0.414-0 0.75-0.336 0.75-0.75 0-0.205-0.082-0.39-0.215-0.526l0 0zM21.426 24.348c-0.010-0.009-0.025-0.004-0.035-0.013-0.128-0.11-0.296-0.177-0.479-0.177h-0c-0.022 0-0.039 0.007-0.061 0.009-0.070 0.001-0.137 0.011-0.2 0.030l0.005-0.001c-1.516 0.574-3.269 0.906-5.099 0.906-0.020 0-0.040-0-0.060-0h0.003c-7.030 0-12.75-4.766-12.75-10.625s5.72-10.624 12.75-10.624c7.031 0 12.75 4.766 12.75 10.624-0.024 2.593-1.087 4.934-2.791 6.63l-0 0-0.010 0.026c-0.111 0.124-0.18 0.288-0.183 0.468v0.001c-0.001 0.015-0.002 0.033-0.002 0.050 0 0.007 0 0.014 0 0.022l-0-0.001c-0.002 0.017-0.002 0.037-0.002 0.058 0 0.008 0 0.016 0 0.024l-0-0.001c0.415 2.246 1.34 4.227 2.652 5.887l-0.021-0.028c-2.496-0.614-4.669-1.747-6.49-3.285l0.024 0.019z"
                  />
                </svg>
              </span>
            </button>
            {addCommentError && <p>{addCommentError.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewModal;
