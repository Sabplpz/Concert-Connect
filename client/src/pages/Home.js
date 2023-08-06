// user homepage
// news feed

import React from "react";
import calendarIcon from "../assets/icons/calendar.png";
import musicIcon from "../assets/icons/music.png";
import userIcon from "../assets/icons/user.png";
import { useQuery } from '@apollo/client';
import { QUERY_ME, QUERY_VENUE, QUERY_CONCERT } from '../utils/queries';
import { formatDate } from "../utils/helpers";

export default function Home() {
  const { loading, data } = useQuery(QUERY_ME);

  let userConcertData;
  if (data?.me.concerts[0]) {
    userConcertData = data?.me.concerts;
  } else {
    userConcertData = [{date: "Null", concertName: "No upcoming concerts saved"}, {date: "Null"}, {date: "Null"}];
  };

  let userArtistData;
  if (data?.me.artists[0]) {
    userArtistData = data?.me.artists;
  } else {
    userArtistData = [{artistName: "No saved artists"}, {artistName: ""}, {artistName: ""}];
  };

  let userGenreData;
  if (data?.me.genre) {
    userGenreData = data?.me.genre;
  } else {
    userGenreData = [{genre: "No favorite genres saved"}, {genre: ""}, {genre: ""}];
  };

  let userVenueData;
  if (data?.me.venue) {
    userVenueData = data?.me.venue;
  } else {
    userVenueData = [{venueName: "No favorite venues saved"}, {venueName: ""}, {venueName: ""}];
  };

  return (
    // full body
    <div class="p-20 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
      {/* aside column with user stats */}
      <div>
        {/* upcoming concerts collapse table */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-base-200">
            Upcoming Concerts
          </div>
          <div className="collapse-content">
            {/* Upcoming Concerts table */}
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base text-neutral-content border-accent">
                    <th>Date</th>
                    <th>Concert</th>
                  </tr>
                </thead>
                {loading ? (
                  <tbody><tr>Loading, please wait</tr></tbody>
                ) : (
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <td>{formatDate((userConcertData[0].date))}</td>
                      <td>{userConcertData[0].concertName}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <td>{formatDate((userConcertData[1].date))}</td>
                      <td>{userConcertData[1].concertName}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <td>{formatDate((userConcertData[2].date))}</td>
                      <td>{userConcertData[2].concertName}</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
            {/* end of upcoming concerts table */}
          </div>
        </div>
        {/* end of upcoming concerts collapse table */}
        {/* top artists collapse table */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-base-200">
            Your Top Artists
          </div>
          <div className="collapse-content">
            {/* Top artists table */}
            <div className="overflow-x-auto">
              <table className="table">
                {loading ? (
                  <tbody><tr>Loading, please wait</tr></tbody>
                ) : (
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <th className="text-accent">1</th>
                      <td>{userArtistData[0].artistName}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th className="text-accent">2</th>
                      <td>{userArtistData[1].artistName}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <th className="text-accent">3</th>
                      <td>{userArtistData[2].artistName}</td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
            {/* end of top artists table */}
          </div>
        </div>
        {/* end of top artists collapse table */}
        {/* top genres collapse table */}
        <div className="collapse mb-5">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-base-200">
            Your Top Genres
          </div>
          <div className="collapse-content">
            {/* Top genres table */}
            <div className="overflow-x-auto">
              <table className="table">
              {loading ? (
                <tbody><tr>Loading, please wait</tr></tbody>
              ) : (
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th className="text-accent">1</th>
                    <td>{userGenreData[0].genre}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th className="text-accent">2</th>
                    <td>{userGenreData[1].genre}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <th className="text-accent">3</th>
                    <td>{userGenreData[2].genre}</td>
                  </tr>
                </tbody>
              )}
              </table>
            </div>
            {/* end of top genres table */}
          </div>
        </div>
        {/* end of top genres collapse table */}
        {/* top venues collapse table */}
        <div className="collapse">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium bg-base-200">
            Your Top Venues
          </div>
          <div className="collapse-content">
            {/* Top venues table */}
            <div className="overflow-x-auto">
              <table className="table">
              {loading ? (
                <tbody><tr>Loading, please wait</tr></tbody>
              ) : (
                <tbody>
                  {/* row 1 */}
                  <tr className="hover">
                    <th className="text-accent">1</th>
                    <td>{userVenueData[0].venueName}</td>
                  </tr>
                  {/* row 2 */}
                  <tr className="hover">
                    <th className="text-accent">2</th>
                    <td>{userVenueData[1].venueName}</td>
                  </tr>
                  {/* row 3 */}
                  <tr className="hover">
                    <th className="text-accent">3</th>
                    <td>{userVenueData[2].venueName}</td>
                  </tr>
                </tbody>
              )}
              </table>
            </div>
            {/* end of top venues table */}
          </div>
        </div>
        {/* end of top venues collapse table */}
      </div>

      {/* feed area */}
      <div className="lg:col-span-2">
        {/* <!-- user post --> */}

        <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
            <li>
              <a href="#" className="block items-center p-3 sm:flex ">
                <img
                  className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                  src={userIcon}
                  alt="Jese Leos image"
                />
                <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                  <div className="text-neutral-content text-base">
                    <span className="text-lg text-secondary dark:text-secondary">
                      Jese Leos
                    </span>{" "}
                    is going to see Beyonce at The Amway Arena on 8/30/2023
                  </div>
                  <div className="text-sm font-normal">"I can't wait!!!!"</div>

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

                    {/* modal pop-up */}
                    <dialog id="my_modal_3" className="modal">
                      <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        {/* user post */}
                        <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                          <li>
                            <a
                              href="#"
                              className="block items-center p-3 sm:flex "
                            >
                              <img
                                className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                                src={userIcon}
                                alt="Jese Leos image"
                              />
                              <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                                <div className="text-neutral-content text-base">
                                  <span className="text-lg text-secondary dark:text-secondary">
                                    Jese Leos
                                  </span>{" "}
                                  is going to see Beyonce at The Amway Arena on
                                  8/30/2023
                                </div>
                                <div className="text-sm font-normal">
                                  "I can't wait!!!!"
                                </div>
                                <span className="inline-flex items-center mb-3 text-xs font-normal text-gray-500">
                                  15 likes
                                </span>
                                <div className="block items-center mt-1">
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
                                  </button>
                                  <button
                                    className="btn btn-outline btn-secondary btn-sm"
                                    onClick={() =>
                                      window.my_modal_3.showModal()
                                    }
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
                                  </button>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ol>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    "I can't wait!!!!"
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    super duper
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    woop
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* add comment form */}
                        <div className="join w-full">
                          <input
                            className="input input-primary w-full rounded-lg shadow-sm text-sm join-item"
                            type="text"
                            name="comment"
                            placeholder="Add Comment"
                          />
                          <button className="join-item btn">
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
                        </div>
                      </form>
                    </dialog>
                  </div>
                  <span className="inline-flex items-center text-xs font-normal text-gray-500 mt-3">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Posted 2 mins ago
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>

        <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
            <li>
              <a href="#" className="block items-center p-3 sm:flex ">
                <img
                  className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                  src={userIcon}
                  alt="Jese Leos image"
                />
                <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                  <div className="text-neutral-content text-base">
                    <span className="text-lg text-secondary dark:text-secondary">
                      Jese Leos
                    </span>{" "}
                    is going to see Beyonce at The Amway Arena on 8/30/2023
                  </div>
                  <div className="text-sm font-normal">"I can't wait!!!!"</div>

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
                      onClick={() => window.my_modal_4.showModal()}
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

                    {/* modal pop-up */}
                    <dialog id="my_modal_4" className="modal">
                      <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        {/* user post */}
                        <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                          <li>
                            <a
                              href="#"
                              className="block items-center p-3 sm:flex "
                            >
                              <img
                                className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                                src={userIcon}
                                alt="Jese Leos image"
                              />
                              <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                                <div className="text-neutral-content text-base">
                                  <span className="text-lg text-secondary dark:text-secondary">
                                    Jese Leos
                                  </span>{" "}
                                  is going to see Beyonce at The Amway Arena on
                                  8/30/2023
                                </div>
                                <div className="text-sm font-normal">
                                  "I can't wait!!!!"
                                </div>
                                <span className="inline-flex items-center mb-3 text-xs font-normal text-gray-500">
                                  15 likes
                                </span>
                                <div className="block items-center mt-1">
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
                                  </button>
                                  <button
                                    className="btn btn-outline btn-secondary btn-sm"
                                    onClick={() =>
                                      window.my_modal_3.showModal()
                                    }
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
                                  </button>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ol>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    "I can't wait!!!!"
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    super duper
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    woop
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* add comment form */}
                        <div className="join w-full">
                          <input
                            className="input input-primary w-full rounded-lg shadow-sm text-sm join-item"
                            type="text"
                            name="comment"
                            placeholder="Add Comment"
                          />
                          <button className="join-item btn">
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
                        </div>
                      </form>
                    </dialog>
                  </div>
                  <span className="inline-flex items-center text-xs font-normal text-gray-500 mt-3">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Posted 2 mins ago
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>

        <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
            <li>
              <a href="#" className="block items-center p-3 sm:flex ">
                <img
                  className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                  src={userIcon}
                  alt="Jese Leos image"
                />
                <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                  <div className="text-neutral-content text-base">
                    <span className="text-lg text-secondary dark:text-secondary">
                      Jese Leos
                    </span>{" "}
                    is going to see Beyonce at The Amway Arena on 8/30/2023
                  </div>
                  <div className="text-sm font-normal">"I can't wait!!!!"</div>

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
                      onClick={() => window.my_modal_5.showModal()}
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

                    {/* modal pop-up */}
                    <dialog id="my_modal_5" className="modal">
                      <form method="dialog" className="modal-box">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                          ✕
                        </button>
                        {/* user post */}
                        <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                          <li>
                            <a
                              href="#"
                              className="block items-center p-3 sm:flex "
                            >
                              <img
                                className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0"
                                src={userIcon}
                                alt="Jese Leos image"
                              />
                              <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                                <div className="text-neutral-content text-base">
                                  <span className="text-lg text-secondary dark:text-secondary">
                                    Jese Leos
                                  </span>{" "}
                                  is going to see Beyonce at The Amway Arena on
                                  8/30/2023
                                </div>
                                <div className="text-sm font-normal">
                                  "I can't wait!!!!"
                                </div>
                                <span className="inline-flex items-center mb-3 text-xs font-normal text-gray-500">
                                  15 likes
                                </span>
                                <div className="block items-center mt-1">
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
                                  </button>
                                  <button
                                    className="btn btn-outline btn-secondary btn-sm"
                                    onClick={() =>
                                      window.my_modal_3.showModal()
                                    }
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
                                  </button>
                                </div>
                              </div>
                            </a>
                          </li>
                        </ol>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    "I can't wait!!!!"
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    super duper
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* user comment */}
                        <div className="mb-4 bg-info-content rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus ">
                          <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                            <li>
                              <a
                                href="#"
                                className="block items-center p-3 sm:flex "
                              >
                                <img
                                  className="mr-4 mb-3 w-6 h-6 rounded-full sm:mb-0"
                                  src={userIcon}
                                  alt="Jese Leos image"
                                />
                                <div className="text-bg-neutral-content ">
                                  <div className="text-neutral-content text-sm">
                                    <span className="text-sm text-secondary dark:text-secondary">
                                      miamreid
                                    </span>{" "}
                                    commented
                                  </div>
                                  <span className="text-base font-normal">
                                    woop
                                  </span>
                                </div>
                              </a>
                            </li>
                          </ol>
                        </div>
                        {/* add comment form */}
                        <div className="join w-full">
                          <input
                            className="input input-primary w-full rounded-lg shadow-sm text-sm join-item"
                            type="text"
                            name="comment"
                            placeholder="Add Comment"
                          />
                          <button className="join-item btn">
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
                        </div>
                      </form>
                    </dialog>
                  </div>
                  <span className="inline-flex items-center text-xs font-normal text-gray-500 mt-3">
                    <svg
                      aria-hidden="true"
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Posted 2 mins ago
                  </span>
                </div>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
