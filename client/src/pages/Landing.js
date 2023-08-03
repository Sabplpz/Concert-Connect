// generic homepage

import React from 'react';
import placeholder from '../assets/placeholder-image.png';
import hero from '../assets/landing-hero.jpg';

export default function Landing() {
  return (
    <div>
      {/* hero section */}
      <div className="hero h-96" style={{ backgroundImage: `url(${hero})` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">The best way to remember incredible concert experiences</h1>
            <p className="mb-5">Concert Connect makes it easy to remember every concert. Ever.</p>
          </div>
        </div>
      </div>
    {/* body section */}
    <div className="container mx-auto">  
    {/* columns */}
      <div className="columns-2 py-24">
        <img classname="w-full aspect-square" src={placeholder}/>
        <div className="text-center text-neutral-content">
          <h2 className="mb-5 text-2xl font-bold">Add All of the Concerts You've Been To</h2>
          <p>Easily add concerts, search for your favorite bands, and view your selected favorites.</p>
        </div>
      </div>
      <div className="columns-2">
        <div className="text-center text-neutral-content">
          <h2 className="mb-5 text-2xl font-bold">Follow Your Friends and Make Plans</h2>
          <p>View who your friends are planning on seeing, where the concert will be, and when. You can also view their favorite bands, and top genres.</p>
        </div>
        <img classname="w-full aspect-square h-24" src={placeholder}/>
      </div>
      <div className="columns-2 py-24">
        <img src={placeholder}/>
        <div className="text-center text-neutral-content">
          <h2 className="mb-5 text-2xl font-bold">Look Up Venues &amp; Scope Out Your Spot</h2>
          <p>See which artists have played at your favorite venues, long before they were famous.</p>
        </div>
      </div>
      <h2 className="mb-20 text-2xl font-bold text-center">Recently Added Concerts</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Date</th>
        <th>Concert</th>
        <th>Venue</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
<button className="btn btn-outline btn-primary">Sign Up</button>
<button className="btn btn-outline btn-secondary">View More Concerts</button>
        </div>
    </div>
  )
}