import React from "react";
import Avatar from "../utils/avatar";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_REVIEWS } from "../utils/queries";


function ShowReview() {
  const { loading: loadingReview, data: reviewsData } = useQuery(QUERY_ALL_REVIEWS);
    
  const allReviewData = reviewsData?.reviews;
  console.log(reviewsData)

  return (
    <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
      <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
        <li>
          <a href="#" className="block items-center p-3 sm:flex ">
            <img
              className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
              src={Avatar.handleAvatar()}
              alt="Jese Leos image"
            />
            <div className="text-bg-neutral-content dark:text-bg-neutral-content">
              <div className="text-neutral-content text-base">
                <span className="text-lg text-secondary dark:text-secondary">
                  {allReviewData[0].username}
                </span>{" "}
                {allReviewData[0].type} review: {allReviewData[0].title} = {allReviewData[0].starRating} stars baby!
              </div>
              <div className="text-sm font-normal">{allReviewData[0].text}</div>

              <div className="block items-center mt-3">
                <button className="btn btn-outline btn-primary btn-sm mr-3">
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
                  Like
                </button>
                <button
                  className="btn btn-outline btn-secondary btn-sm"
                  onClick={() => window.my_modal_3.showModal()}
                >
                  <svg
                    fill="none"
                    className="h-6 w-5"
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
                    ></path>
                  </svg>
                  Comment
                </button>
              </div>
            </div>
          </a>
        </li>
      </ol>
    </div>
  );
}

export default ShowReview;
