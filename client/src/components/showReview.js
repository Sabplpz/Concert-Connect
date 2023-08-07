import React from "react";
import Avatar from "../utils/avatar";
import { useState, createContext } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_REVIEWS } from "../utils/queries";
import ReviewModal from "./reviewModal";
import userIcon from "../assets/icons/user.png";

export const idContext = createContext();

function ShowReview() {
  const {
    loading: loadingReview,
    error,
    data: reviewsData,
  } = useQuery(QUERY_ALL_REVIEWS);

  const [showModal, setShowModal] = useState(false);
  const [reviewId, setReviewId] = useState("");

  if (loadingReview) return <p>Loading reviews...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allReviewData = reviewsData?.reviews || [];

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
                    src={Avatar.handleAvatar()}
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
