import React from "react";
import Avatar from "../utils/avatar";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_REVIEWS } from "../utils/queries";

function ShowReview() {
    const { loading: loadingReview, error, data: reviewsData } = useQuery(QUERY_ALL_REVIEWS);
    
    if (loadingReview) return <p>Loading reviews...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const allReviewData = reviewsData?.reviews || [];

    return (
        <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
            <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                {allReviewData.map(review => (
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
                                        {review.username}
                                    </span>
                                    {review.type} review: {review.title} = {review.starRating} stars baby!
                                </div>
                                <div className="text-sm font-normal">{review.text}</div>

                                <div className="block items-center mt-3">
                                    <button className="btn btn-outline btn-primary btn-sm mr-3">
                                        {/* ...rest of the svg code for Like */}
                                        Like
                                    </button>
                                    <button
                                        className="btn btn-outline btn-secondary btn-sm"
                                        onClick={() => window.my_modal_3.showModal()}
                                    >
                                        {/* ...rest of the svg code for Comment */}
                                        Comment
                                    </button>
                                </div>
                            </div>
                        </a>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ShowReview;
