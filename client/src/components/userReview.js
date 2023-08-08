import React from "react";
import Avatar from "../utils/avatar";
import { useState, createContext } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER_REVIEWS, QUERY_AVATARS } from "../utils/queries";
import { DELETE_REVIEW } from "../utils/mutations";
import ReviewModal from "./reviewModal";
import userIcon from "../assets/icons/user.png";
import trash from "../assets/icons/trash.png";

export const idContext = createContext();

function UserReview() {
  const [showModal, setShowModal] = useState(false);
  const [reviewId, setReviewId] = useState("");

  const {
    loading: loadingReview,
    error,
    data: reviewsData,
  } = useQuery(QUERY_USER_REVIEWS);

  const {
    loading: loadingAvatar,
    error: errorAvatar,
    data: avatarData,
  } = useQuery(QUERY_AVATARS);

  const [deleteReview, { error: deleteReviewError }] =
    useMutation(DELETE_REVIEW);

  const usersAvatars = avatarData?.users;
  const allReviewData = reviewsData?.userReviews || [];

  if (loadingReview) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleUsersAvatars = (username) => {
    if (usersAvatars) {
      const avatarString = usersAvatars.filter(
        (user) => user.username === username
      );
      return Avatar.handleAvatar(avatarString[0].avatar);
    } else {
      return Avatar.handleAvatar(null);
    }
  };

  const handleDeleteReview = async (id) => {
    try {
      await deleteReview({ variables: { id: id } });
      window.location.reload();
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <idContext.Provider value={reviewId}>
      <div>
        {allReviewData.map((review) => (
          <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
            <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
              <li key={review.id}>
                <a href="#" className="block items-center p-3 sm:flex">
                  <img
                    className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                    src={handleUsersAvatars(review.username)}
                    alt={`${review.username} image`}
                  />
                  <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                    <div className="text-neutral-content text-base">
                      <span className="text-lg text-secondary dark:text-secondary">
                        {review.username}{" "}
                      </span>
                      reviwed a/an {review.type} - {review.title} ={" "}
                      {review.starRating} stars baby!
                    </div>
                    <div className="text-sm font-normal">{review.text}</div>

                    <div className="block items-center mt-3">
                      <button
                        className="btn btn-outline btn-primary btn-sm"
                        onClick={() => {
                          setReviewId(review._id);
                          setShowModal(true);
                        }}
                      >
                        {/* ...rest of the svg code for Comment */}
                        Like & Comment
                      </button>
                    </div>
                  </div>
                </a>
              </li>
            </ol>
            <button
              className="btn btn-outline btn-primary btn-sm"
              onClick={() => handleDeleteReview(review._id)}
            >
              Delete
            </button>
            {/* For future development */}
            {/* <button className="btn btn-outline btn-primary btn-sm">
              Update
            </button> */}
          </div>
        ))}
        <ReviewModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
        ></ReviewModal>
      </div>
    </idContext.Provider>
  );
}

export default UserReview;
