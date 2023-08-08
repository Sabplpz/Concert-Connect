import React, { useState, useEffect } from "react";

import userIcon from "../assets/icons/user.png";
import artistIcon from "../assets/icons/album.png";
import locationIcon from "../assets/icons/location.png";
import venueIcon from "../assets/icons/venue.png";
import ticketIcon from "../assets/icons/concert-ticket.png";
import Avatar from "../utils/avatar";


import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { FOLLOW_USER, UNFOLLOW_USER } from "../utils/mutations";
import { formatDate } from "../utils/helpers";
import UserReview from "../components/userReview"


//I've hid all your names in here, find them or perish - Finn

// <button className="btn btn-primary">Like</button>

function Profile() {
  const { loading, data } = useQuery(QUERY_ME);
  
  let avatar = Avatar.getAvatar();

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

  console.log(userData);

  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  
  useEffect(() => {
    if (data?.me) {
      setFollowers(data.me.follow.length);
      setIsFollowing(data.me.follow.some(obj => obj.username === data.me.username));
    }
  }, [data]);
  
  // --------------------- FOLLOW & UNFOLLOW JS START -------------------------
  const [followUser, { data: followUserData }] = useMutation(FOLLOW_USER);
  
  const handleFollowUser = async (event) => {
    event.preventDefault();
    try {
      const { data } = await followUser({
        variables: { username: event.target.value },
      });
      if(data) {
        setIsFollowing(true);
        setFollowers(followers + 1);
      }
    } catch (err) {
      console.error(err);
    }
  };
  
  const [unfollowUser, { data: unfollowUserData }] = useMutation(UNFOLLOW_USER);

  const handleUnfollowUser = async (event) => {
    event.preventDefault();
    try {
      const { data } = await unfollowUser({
        variables: { username: event.target.value },
      });
      if(data) {
        setIsFollowing(false);
        setFollowers(followers - 1);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // --------------------- FOLLOW AND UNFOLLOW JS END -------------------------

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
    <div className="w-full py-10 px-10">
      <div>
        <div className="sm: flex space-x-7 md:items-start items-center">
          <div className="mb-10">
            <img
              className="rounded-full mr-8 md:w-36 ring ring-primary ring-offset-base-100 ring-offset-2"
              src={Avatar.handleAvatar(avatar)}
              alt="user profile pic"
            />
          </div>
          <div>
          <h1 className="text-4xl font-bold my-2">{userData.username}</h1>
        <p className="text-base tracking-wide mb-6 md:max-w-lg">
          {followers} Followers
        </p>
        {isFollowing ? (
          <button className="btn btn-primary btn-outline" onClick={handleUnfollowUser} value={userData.username}>Unfollow</button>
        ) : ( 
          <button className="btn btn-primary btn-outline" onClick={handleFollowUser} value={userData.username}>Follow</button>
        )}
      </div>
        </div>
      </div>
      <div className="sm:grid lg:grif-cols-3 grid-cols-3 sm:gap-x-4">
        <div className="flex justify-between items-center p-6 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus">
          <div>
            <span className="text-md text-slate-400">Concerts</span>
            <h3 className="text-3xl font-bold text-slate-100">
              {userData.concerts.length}
            </h3>
          </div>
          <div>
            <img src={ticketIcon} alt="Ticket Icon" className="h-12 w-12" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 mb-4  bg-base-100 rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus">
          <div>
            <span className="text-md text-slate-400">Artists</span>
            <h3 className="text-3xl font-bold text-slate-100">
              {userData.artists.length}
            </h3>
          </div>
          <div>
            <img src={artistIcon} alt="Artist Icon" className="h-12 w-12" />
          </div>
        </div>
        <div className="flex justify-between items-center p-6 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 hover:bg-neutral-focus">
          <div>
            <span className="text-md text-slate-400">Venues</span>
            <h3 className="text-3xl font-bold text-slate-100">
              {userData.venues.length}
            </h3>
          </div>
          <div>
            <img src={venueIcon} alt="Venue Icon" className="h-12 w-12" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mt-10">
        
        <div>
          {/* Top artists table */}
          <div className="collapse-title bg-base-200 text-xl">Top Artists</div>
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
        <div>
          <div className="collapse-title bg-base-200 text-xl">Top Venues</div>
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
      <div className="text-center">
        <h2 className="mt-20 text-2xl font-bold text-center">
          Recent Concerts
        </h2>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="border-accent text-base text-neutral-content">
                <th>Date</th>
                <th>Concert</th>
                <th>Venue</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {userData.concerts && userData.concerts.length > 0 && (
                <tr className="hover">
                  <th>{formatDate(userData.concerts[0].date)}</th>
                  <td>{userData.concerts[0].concertName}</td>
                  <td>VENUE</td>
                  <td>{userData.concerts[0].city}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="fill-white"
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
                      Favorite
                    </button>
                  </th>
                </tr>
              )}
              {/* row 2 */}
              {userData.concerts && userData.concerts.length > 1 && (
                <tr className="hover">
                  <th>{formatDate(userData.concerts[1].date)}</th>
                  <td>{userData.concerts[1].concertName}</td>
                  <td>VENUE</td>
                  <td>{userData.concerts[1].city}</td>
                </tr>
              )}

              {userData.concerts && userData.concerts.length > 2 && (
                <tr className="hover">
                  <th>{formatDate(userData.concerts[2].date)}</th>
                  <td>{userData.concerts[2].concertName}</td>
                  <td>VENUE</td>
                  <td>{userData.concerts[2].city}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        <h2 className="mt-20 text-2xl font-bold text-center">
          User Reviews
        </h2>
        <UserReview />
      </div>
    </div>
  );
}

export default Profile;