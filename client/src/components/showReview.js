import React from "react";
import Avatar from "../utils/avatar";
import { useState, createContext } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import { QUERY_ALL_REVIEWS, QUERY_AVATARS } from "../utils/queries";
import ReviewModal from "./reviewModal";
import userIcon from "../assets/icons/user.png";

export const idContext = createContext();

function ShowReview() {
  const {
    loading: loadingReview,
    error,
    data: reviewsData,
  } = useQuery(QUERY_ALL_REVIEWS);

  const {
    loading: loadingAvatar,
    error: errorAvatar,
    data: avatarData,
  } = useQuery(QUERY_AVATARS);

  const usersAvatars = avatarData?.users;

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

  const [showModal, setShowModal] = useState(false);
  const [reviewId, setReviewId] = useState("");

  if (loadingReview) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allReviewData = reviewsData?.reviews || [];

  return (
    <idContext.Provider value={reviewId}>
      <div>
        {allReviewData.map((review) => (
          <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus">
            <ol className="mt-3 divide-y divide-bg-primary ">
              <li key={review.id}>
                <Link to="#" className="p-3 flex align-start">
                  <img
                    className="mr-6 mb-3 w-12 h-12 rounded-full"
                    src={handleUsersAvatars(review.username)}
                    alt={`${review.username} image`}
                  />
                  <div className="text-bg-neutral-content">
                    <div className="text-neutral-content text-base">
                      <span className="text-lg text-secondary">
                        {review.username}{" "}
                      </span>
                      reviewed a/an {review.type} - {review.title} ={" "}
                      {review.starRating} stars baby!
                    </div>
                    <div className="text-sm font-normal block text-left mb-3">{review.text}</div>
                    <div className="block justify-start text-left">
                      <button
                        className="btn btn-outline btn-primary btn-sm"
                        onClick={() => {
                          setReviewId(review._id);
                          setShowModal(true);
                        }}
                      >
                        {/* ...rest of the svg code for Comment */}
                        Post Details
                      </button>
                      </div>
                  </div>
                </Link>
                
              </li>
            </ol>
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

export default ShowReview;
