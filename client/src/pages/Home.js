// user homepage
// news feed

import React from "react";
import calendarIcon from "../assets/icons/calendar.png";
import musicIcon from "../assets/icons/music.png";
import userIcon from "../assets/icons/user.png";
import Avatar from "../utils/avatar";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { formatDate } from "../utils/helpers";
import AddReview from "../components/addReview";
import ShowReview from "../components/showReview";
import ReviewModal from "../components/reviewModal";

export default function Home() {
  // ----------------------------------------------- QUERY_ME START ----------------------------------------------------------------
  const { loading: loadingMe, data: meData } = useQuery(QUERY_ME);

  let userConcertData;
  if (meData?.me.concerts[0]) {
    userConcertData = meData?.me.concerts;
  } else {
    userConcertData = [
      { date: "Null", concertName: "No upcoming concerts saved" },
      { date: "Null" },
      { date: "Null" },
    ];
  }

  let userArtistData;
  if (meData?.me.artists[0]) {
    userArtistData = meData?.me.artists;
  } else {
    userArtistData = [
      { artistName: "No saved artists" },
      { artistName: "" },
      { artistName: "" },
    ];
  }

  let userGenreData;
  if (meData?.me.genre) {
    userGenreData = meData?.me.genre;
  } else {
    userGenreData = [
      { genre: "No favorite genres saved" },
      { genre: "" },
      { genre: "" },
    ];
  }

  let userVenueData;
  if (meData?.me.venue) {
    userVenueData = meData?.me.venue;
  } else {
    userVenueData = [
      { venueName: "No favorite venues saved" },
      { venueName: "" },
      { venueName: "" },
    ];
  }
  // ------------------------------------------------- QUERY_ME END ----------------------------------------------------------------

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
                {loadingMe ? (
                  <tbody>
                    <tr>Loading, please wait</tr>
                  </tbody>
                ) : (
                  <tbody>
                    {/* row 1 */}
                    {/* {userConcertData && userConcertData.length > 0 && ( */}
                    <tr className="hover">
                      <td>{formatDate(userConcertData[0].date)}</td>
                      <td>{userConcertData[0].concertName}</td>
                    </tr>
                    {/* )} */}
                    {/* row 2 */}
                    {/* {userConcertData && userConcertData.length > 1 && ( */}
                    <tr className="hover">
                      <td>{formatDate(userConcertData[1].date)}</td>
                      <td>{userConcertData[1].concertName}</td>
                    </tr>
                    {/* )} */}
                    {/* row 3 */}
                    {/* {userConcertData && userConcertData.length > 2 && ( */}
                    <tr className="hover">
                      <td>{formatDate(userConcertData[2].date)}</td>
                      <td>{userConcertData[2].concertName}</td>
                    </tr>
                    {/* )} */}
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
                {loadingMe ? (
                  <tbody>
                    <tr>Loading, please wait</tr>
                  </tbody>
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
                {loadingMe ? (
                  <tbody>
                    <tr>Loading, please wait</tr>
                  </tbody>
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
                {loadingMe ? (
                  <tbody>
                    <tr>Loading, please wait</tr>
                  </tbody>
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
        <AddReview />
        {/* <!-- user reviews --> */}
        <ShowReview />
      </div>
    </div>
  );
}
