import React from "react";

import userIcon from "../assets/icons/user.png";
import artistIcon from "../assets/icons/album.png";
import locationIcon from "../assets/icons/location.png";
import venueIcon from "../assets/icons/venue.png";
import ticketIcon from "../assets/icons/concert-ticket.png";
import Avatar from "../utils/avatar";

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { FOLLOW_USER } from "../utils/mutations";
import { formatDate } from "../utils/helpers";
import ShowReview from "../components/showReview"


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
  
  // --------------------- FOLLOW_USER JS START -------------------------
  const [followUser, { data: followUserData }] = useMutation(FOLLOW_USER);

  const handleFollowUser = async (event) => {
    event.preventDefault();
    try {
      const { data } = followUser({
        variables: { username: event.target.value },
      });
    } catch (err) {
      console.error(err);
    }
  };
  // --------------------- FOLLOW_USER JS END -------------------------

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
              100 followers
            </p>
            <button className="btn btn-primary btn-outline">Follow</button>
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mt-10">
        
        <div>
          <div className="collapse-title bg-base-200 text-xl">Top Genres</div>
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
        <div>
          {/* Top artists table */}
          <div className="collapse-title bg-base-200 text-xl">Top Artists</div>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr className="hover">
                  <th className="text-accent">1</th>
                  <td>{userData.artistName}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th className="text-accent">2</th>
                  <td>{userData.artistName}</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th className="text-accent">3</th>
                  <td>{userData.artistName}</td>
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
                  <td>{userData.venueName}</td>
                </tr>
                {/* row 2 */}
                <tr className="hover">
                  <th className="text-accent">2</th>
                  <td>{userData.venueName}</td>
                </tr>
                {/* row 3 */}
                <tr className="hover">
                  <th className="text-accent">3</th>
                  <td>{userData.venueName}</td>
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
            </tbody>
          </table>
        </div>
        <div className="join">
          <button className="join-item btn">1</button>
          <button className="join-item btn btn-active">2</button>
          <button className="join-item btn">3</button>
          <button className="join-item btn">4</button>
        </div>
        <h2 className="mt-20 text-2xl font-bold text-center">
          Favorite Concerts
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
              {/* row 1 */}
              <tr className="hover">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
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
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
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
              {/* row 3 */}
              <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
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
            </tbody>
          </table>
          <div className="join">
            <button className="join-item btn">1</button>
            <button className="join-item btn btn-active">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">4</button>
          </div>
        </div>
        <h2 className="mt-20 text-2xl font-bold text-center">
          User Reviews
        </h2>
        <ShowReview />
      </div>
    </div>
  );
}

export default Profile;

//   <div>
//   <h1 className="pl-10 pb-3 text-6xl">Mia's Page</h1>
//   <p class="pl-10 text-lg" >1,000,000 followers | 84 Following
//   <button className='btn btn-secondary ml-7'>Follow</button>

//   </p>

//   <ul className='flex flex-row pl-11 text-2xl'>
//     <li className="pr-3" ><a href="https://www.coolmathgames.com">Overview</a></li>
//     <li className="pr-3"> <a href="https://www.pbskids.org">Concerts</a></li>
//     <li className="pr-3"><a href="https://www.indeed.com">Bands</a></li>
//     <li className="pr-3"><a href="https://www.poptropica.com">Favorites</a></li>
//   </ul>
// <span class="h-1 w-full bg-white lg:w-1/3"></span>
// <body className="pt-10 ">
//   <h2 className="text-5xl flex justify-center">Mia has been to 157 Set It Off concerts in the last year</h2>
//   <header className='flex flex-row justify-center'>
//     <h4 className='px-3'>Top Bands</h4>
//     <h4 className='px-20'>Top Genres</h4>
//     <h4 className='pl-3'> Top Venues</h4>
//   </header>

//   <div className="container mx-auto flex flex-row justify-center">
//       <table className="table-xs border-solid border-2">
//         {/* head */}
//         <thead>
//           <tr className="hover">
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           <tr>
//             <th>1</th>
//             <td>Cy Ganderton</td>
//             <td>Blue</td>
//           </tr>
//           {/* row 2 */}
//           <tr className="hover">
//             <th>2</th>
//             <td>Hart Hagerty</td>
//             <td>Purple</td>
//           </tr>
//           {/* row 3 */}
//           <tr className="hover">
//             <th>3</th>
//             <td>Brice Swyre</td>
//             <td>Red</td>
//           </tr>
//         </tbody>
//       </table>
//       {/* <h4>Top Genres</h4> */}
//       <table className="table-xs border-solid border-2">
//         {/* head */}
//         <thead>
//           <tr className="hover">
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           <tr>
//             <th>1</th>
//             <td>Cy Ganderton</td>
//             <td>Blue</td>
//           </tr>
//           {/* row 2 */}
//           <tr className="hover">
//             <th>2</th>
//             <td>Hart Hagerty</td>
//             <td>Purple</td>
//           </tr>
//           {/* row 3 */}
//           <tr className="hover">
//             <th>3</th>
//             <td>Brice Swyre</td>
//             <td>Red</td>
//           </tr>
//         </tbody>
//       </table>
//       <table className="table-xs border-solid border-2">
//         {/* head */}
//         <thead>
//           <tr className="hover">
//             <th></th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* row 1 */}
//           <tr>
//             <th>1</th>
//             <td>Cy Ganderton</td>
//             <td>Blue</td>
//           </tr>
//           {/* row 2 */}
//           <tr className="hover">
//             <th>2</th>
//             <td>Hart Hagerty</td>
//             <td>Purple</td>
//           </tr>
//           {/* row 3 */}
//           <tr className="hover">
//             <th>3</th>
//             <td>Brice Swyre</td>
//             <td>Red</td>
//           </tr>
//         </tbody>
//       </table>
//   </div>
//   <h2 className='text-4xl pl-8'>Favorite Concerts</h2>
//   <div className="overflow-x-auto pl-8">
//     <table className="table table-xs">
//       <thead>
//         <tr>
//           <th></th>
//           <th>Date</th>
//           <th>Concert</th>
//           <th>Venue</th>
//           <th>Location</th>
//           <th>Favorite</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>1</th>
//           <td>Cy Ganderton</td>
//           <td>Quality Control Specialist</td>
//           <td>Littel, Schaden and Vandervort</td>
//           <td>Canada</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>2</th>
//           <td>Hart Hagerty</td>
//           <td>Desktop Support Technician</td>
//           <td>Zemlak, Daniel and Leannon</td>
//           <td>United States</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>3</th>
//           <td>Brice Swyre</td>
//           <td>Tax Accountant</td>
//           <td>Carroll Group</td>
//           <td>China</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>4</th>
//           <td>Marjy Ferencz</td>
//           <td>Office Assistant I</td>
//           <td>Rowe-Schoen</td>
//           <td>Russia</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>5</th>
//           <td>Yancy Tear</td>
//           <td>Community Outreach Specialist</td>
//           <td>Wyman-Ledner</td>
//           <td>Brazil</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>

//       </tbody>

//     </table>
//   </div>
//   <h2 className='text-4xl pl-8'>Recent Concerts</h2>
//   <div className="overflow-x-auto pl-8">
//     <table className="table table-xs">
//       <thead>
//         <tr>
//           <th></th>
//           <th>Date</th>
//           <th>Concert</th>
//           <th>Venue</th>
//           <th>Location</th>
//           <th>Favorite</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <th>1</th>
//           <td>Cy Ganderton</td>
//           <td>Quality Control Specialist</td>
//           <td>Littel, Sabrina and Mia</td>
//           <td>Canada</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>2</th>
//           <td>Hart Hagerty</td>
//           <td>Desktop Support Technician</td>
//           <td>Zemlak, Daniel and Dion</td>
//           <td>United States</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>3</th>
//           <td>Brice Swyre</td>
//           <td>Tax Accountant</td>
//           <td>Carroll Group</td>
//           <td>China</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>4</th>
//           <td>Marjy Ferencz</td>
//           <td>Office Assistant I</td>
//           <td>Rowe-Schoen</td>
//           <td>Russia</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>
//         <tr>
//           <th>5</th>
//           <td>Yancy Tear</td>
//           <td>Community Outreach Specialist</td>
//           <td>Wyman-Ledner</td>
//           <td>Bobby</td>
//           <input type="checkbox" checked="checked" className="checkbox" />
//         </tr>

//       </tbody>

//     </table>

//     <button className="btn btn-primary ml-20">View All Concerts</button>
//   </div>
//   </body>
// </div>
