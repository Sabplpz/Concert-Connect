// user homepage
// news feed

import React from 'react';
import calendarIcon from '../assets/calendar.png';
import musicIcon from '../assets/music.png';
import userIcon from '../assets/user.png';

export default function Home() {
    return(
      <div className="container mx-auto">
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Your Concert Connections</h1>
                </div>
            </div>
        </div>
        {/* Upcoming Concerts table */}
        <div className="overflow-x-auto">
            <h2>Upcoming Concerts</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Concert</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>09/30/2023</td>
        <td>Broadside <br />
        The Maine</td>
      </tr>
      {/* row 2 */}
      <tr>
        <td>10/01/2023</td>
        <td>You Me At Six</td>
      </tr>
      {/* row 3 */}
      <tr>
        <td>10/13/2023</td>
        <td>Jonas Brothers</td>
      </tr>
    </tbody>
  </table>
</div>
{/* End of upcoming concerts table */}
{/* Top Bands table */}
<div className="overflow-x-auto">
            <h2>Top Bands</h2>
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>The Maine</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Bright Eyes</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Lights</td>
      </tr>
    </tbody>
  </table>
</div>
{/* End of top bands table */}
{/* Top Genres table */}
<div className="overflow-x-auto">
            <h2>Top Genres</h2>
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Pop Rock</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Indie</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Alternative</td>
      </tr>
    </tbody>
  </table>
</div>
{/* End of top genres table */}
{/* Top Genres table */}
<div className="overflow-x-auto">
            <h2>Top Genres</h2>
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Pop Rock</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Indie</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Alternative</td>
      </tr>
    </tbody>
  </table>
</div>
{/* End of top genres table */}
{/* Top Venues table */}
<div className="overflow-x-auto">
            <h2>Top Venues</h2>
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>The Social</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>The Beacham</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>House of Blues</td>
      </tr>
    </tbody>
  </table>
</div>
{/* Logged in user post form */}
<div className="container mx-auto">
  <div className="join">
    <input className="input input-bordered input-primary join-item" type="text" placeholder="Email"/>
    <button className="btn join-item rounded-r-full">Post</button>
  </div>
  {/* End of logged in used post form */}
  {/* Users friends post */}
  <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sabrina Lopez</h2>
    <p>Just saw Beyonce</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Like</button>
      <button className="btn btn-secondary">Comment</button>
    </div>
  </div>
</div>
{/* End of friends post */}
{/* Users friends post */}
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sabrina Lopez</h2>
    <p>Just saw Beyonce</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Like</button>
      <button className="btn btn-secondary">Comment</button>
    </div>
  </div>
</div>
{/* End of friends post */}
{/* Users friends post */}
<div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Sabrina Lopez</h2>
    <p>Just saw Beyonce</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Like</button>
      <button className="btn btn-secondary">Comment</button>
    </div>
  </div>
</div>
{/* End of friends post */}
</div>
{/* End of top venues table */}
</div>
    )
}
