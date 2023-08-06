// generic homepage
import { Navigate } from "react-router";
import Auth from "../utils/auth";
import React from "react";
import placeholder from "../assets/placeholder/placeholder-image.png";
import hero from "../assets/logo/landing-hero.jpg";

export default function Landing() {
  const feedPage = <Navigate redirect to="/feed"></Navigate>;

  const landingPage = (
    <div>
      {/* hero section */}
      <div
        className="hero h-96 shadow-xl shadow-fuchsia-700/40"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              The best way to remember incredible concert experiences
            </h1>
            <p className="mb-5">
              Concert Connect makes it easy to remember every concert. Ever.
            </p>
          </div>
        </div>
      </div>
      {/* body section */}
      <div className="container mx-auto">
        {/* row 1 */}
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 shadow-lg shadow-base-200/50">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  src={placeholder}
                  alt="Placeholder"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-20 lg:py-24">
                <h2 className="text-2xl font-bold sm:text-2xl">
                  Add All of the Concerts You've Been To
                </h2>
                <p className="mt-4 text-neutral-content">
                  Easily add concerts, search for your favorite artists, and
                  view your selected favorites.
                </p>
                <button className="mt-4 btn btn-outline btn-secondary btn-med">
                  Search Concerts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* row 2 */}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 shadow-lg shadow-base-200/50">
              <div class="p-20 lg:py-24">
                <h2 class="text-2xl font-bold sm:text-2xl">
                  Follow Your Friends and Make Plans
                </h2>
                <p class="mt-4 text-neutral-content">
                  View who your friends are planning on seeing, where the
                  concert will be, and when. You can also view their favorite
                  artists and top genres.
                </p>
                <button className="mt-4 btn btn-outline btn-primary btn-med">
                  Sign Up
                </button>
              </div>

              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 sm:order-first lg:h-full">
                <img
                  src={placeholder}
                  alt="Placeholder"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* row 3 */}

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 shadow-lg shadow-base-200/50">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <img
                  src={placeholder}
                  alt="Placeholder"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>

              <div className="p-20 lg:py-24">
                <h2 className="text-2xl font-bold sm:text-2xl">
                  Look Up Venues &amp; Scope Out Your Spot
                </h2>
                <p className="mt-4 text-neutral-content">
                  Get more information on the concert venue before the show.
                </p>
                <button className="mt-4 btn btn-outline btn-secondary btn-med">
                  Search Concerts
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <h2 className="mt-20 text-2xl font-bold text-center">
          Recently Added Concerts
        </h2>
        <div className="overflow-x-auto p-10">
          <table className="table"> */}
            {/* head */}
            {/* <thead>
              <tr className="border-accent text-base text-neutral-content">
                <th>Date</th>
                <th>Concert</th>
                <th>Venue</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody> */}
              {/* row 1 */}
              {/* <tr className="hover">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr> */}
              {/* row 2 */}
              {/* <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr> */}
              {/* row 3 */}
              {/* <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="content-center text-center mb-20">
          <button className="btn btn-outline btn-secondary">
            View More Concerts
          </button> */}
        </div> 
    </div>
  );

  return Auth.loggedIn() ? feedPage : landingPage;
}
