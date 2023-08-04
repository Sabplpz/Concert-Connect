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
    {/* row 1 */}
     <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              src={placeholder}
              className="absolute inset-0 h-full w-full object-cover"/>
          </div>
          <div className="lg:py-24"> 
            <h2 className="text-3xl font-bold sm:text-2xl">Add All of the Concerts You've Been To</h2>
            <p className="mt-4 text-gray-600">Easily add concerts, search for your favorite artists, and view your selected favorites.</p>
            <a href="#" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">Get Started Today</a>
          </div>
        </div>
      </div>
    </section>

    {/* row 2 */}

    <section>
  <div
    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
  >
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          class="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 class="text-3xl font-bold sm:text-4xl">Grow your audience</h2>

        <p class="mt-4 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
          atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
          veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>

        <a
          href="#"
          class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started Today
        </a>
      </div>
    </div>
  </div>
</section>

      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={placeholder}/></figure>
          <div className="card-body">
            <h2 className="card-title">Follow Your Friends and Make Plans</h2>
            <p>View who your friends are planning on seeing, where the concert will be, and when. You can also view their favorite artists and top genres.</p>
          </div>
      </div>
    
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={placeholder}/></figure>
          <div className="card-body">
            <h2 className="card-title">Look Up Venues &amp; Scope Out Your Spot</h2>
            <p>See which artists have played at your favorite venues, long before they were famous.</p>
          </div>
      </div>
      
      <h2 className="mb-20 mt-20 text-2xl font-bold text-center">Recently Added Concerts</h2>
      <div className="overflow-x-auto mb-20">
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
<div className="grid grid-cols-2 gap-2 mb-20">
  <button className="btn btn-outline btn-primary">Sign Up</button>
  <button className="btn btn-outline btn-secondary">View More Concerts</button>
</div>
        </div>
    </div>
  )
}