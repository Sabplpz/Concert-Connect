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
  const { loading, data } = useQuery(QUERY_ME);

  let userData;
  if (data?.me) {
    userData = data?.me;
  } else {
    userData = {
      username: "Loading",
      concerts: [
        { date: "Null", concertName: "No upcoming concerts saved" },
        { date: "Null", concertName: "" },
        { date: "Null", concertName: "" },
      ],
      artists: [
        { artistName: "No saved artists" },
        { artistName: "" },
        { artistName: "" },
      ],
      venues: [
        { venueName: "No favorite venues saved" },
        { venueName: "" },
        { venueName: "" },
      ],
    };
  }
  // ------------------------------------------------- QUERY_ME END ----------------------------------------------------------------

  const getTopArtists = (artists) => {
    let frequency = {};
    let result = [];

    artists.forEach(function(artist) {
      if (artist.artistName in frequency)
        frequency[artist.artistName]++;
      else
        frequency[artist.artistName] = 1;
    });

    let sortedKeys = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    result = sortedKeys.slice(0, 3);
    
    while (result.length < 3) {
      result.push('No artist');
    }

    return result;
  };

  let topArtists = userData.artists.length > 0 ? getTopArtists(userData.artists) : ['No artist', 'No artist', 'No artist'];

  const getTopVenues = (venues) => {
    let frequency = {};
    let result = [];

    venues.forEach(function(venue) {
      if (venue.venueName in frequency)
        frequency[venue.venueName]++;
      else
        frequency[venue.venueName] = 1;
    });

    let sortedKeys = Object.keys(frequency).sort((a, b) => frequency[b] - frequency[a]);
    result = sortedKeys.slice(0, 3);
    
    while (result.length < 3) {
      result.push('No venue');
    }

    return result;
  };

  let topVenues = userData.venues.length > 0 ? getTopVenues(userData.venues) : ['No venue', 'No venue', 'No venue'];

  if (loading) return "Loading...";

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
                
                  <tbody>
                    <tr className="hover">
                      <td>{formatDate(userData.concerts[0].date)}</td>
                      <td>{userData.concerts[0].concertName}</td>
                    </tr>
                    <tr className="hover">
                    <td>{formatDate(userData.concerts[1].date)}</td>
                      <td>{userData.concerts[0].concertName}</td>
                    </tr>
                    <tr className="hover">
                    <td>{formatDate(userData.concerts[2].date)}</td>
                      <td>{userData.concerts[0].concertName}</td>
                    </tr>
                  </tbody>
                
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
              
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <th className="text-accent">1</th>
                      <td>{topArtists[0]}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th className="text-accent">2</th>
                      <td>{topArtists[1]}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <th className="text-accent">3</th>
                      <td>{topArtists[2]}</td>
                    </tr>
                  </tbody>
                
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
                
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <th className="text-accent">1</th>
                      <td>{userData.genre}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th className="text-accent">2</th>
                      <td>{userData.genre}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <th className="text-accent">3</th>
                      <td>{userData.genre}</td>
                    </tr>
                  </tbody>
                
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
                
                  <tbody>
                    {/* row 1 */}
                    <tr className="hover">
                      <th className="text-accent">1</th>
                      <td>{topVenues[0]}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <th className="text-accent">2</th>
                      <td>{topVenues[1]}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <th className="text-accent">3</th>
                      <td>{topVenues[2]}</td>
                    </tr>
                  </tbody>
                
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
