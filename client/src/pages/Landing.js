// generic homepage

import React from 'react';
import placeholder from '../assets/placeholder-image.png';

export default function Landing() {
  return (
    <div>
        <div>
            <h1>The best way to remember incredible concert experiences</h1>
            <p>Concert Connect makes it easy to remember every concert. Ever. Follow friends, see your upcoming shows, and more.</p>
        </div>
        <div>
            <div>
                <img src={placeholder}/>
                <h2>Add All of the Concerts You've Been To</h2>
                <p>Easily add concerts, search for your favorite bands, and view your selected favorites.</p>
            </div>
            <div>
                <img src={placeholder}/>
                <h2>Follow Your Friends and Make Plans</h2>
                <p>View who your friends are planning on seeing, where the concert will be, and when. You can also view their favorite bands, and top genres.</p>
            </div>
            <div>
                <img src={placeholder}/>
                <h2>Look Up Venues &amp; Scope Out Your Spot</h2>
                <p>See which artists have played at your favorite venues, long before they were famous.</p>
            </div>
        </div>
        <div>
            <h2>Recently Added Concerts</h2>
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