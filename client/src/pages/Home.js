// user homepage
// news feed

import React from 'react';
import calendarIcon from '../assets/calendar.png';
import musicIcon from '../assets/music.png';
import userIcon from '../assets/user.png';

export default function Home() {
    return(


        <div class="p-20 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          {/* aside column with user stats */}
          <div>
            {/* upcoming concerts collapse table */}
            <div className="collapse mb-5">
              <input type="checkbox"/> 
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
                    {/* row 1 */}
                    <tr className="hover">
                      <td>09/30/2023</td>
                      <td>Broadside <br />
                      The Maine</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="hover">
                      <td>10/01/2023</td>
                      <td>You Me At Six</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="hover">
                      <td>10/13/2023</td>
                      <td>Jonas Brothers</td>
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
                        <td>The Maine</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover">
                        <th className="text-accent">2</th>
                        <td>Bright Eyes</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover">
                        <th className="text-accent">3</th>
                        <td>Lights</td>
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
              <input type="checkbox"/> 
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
                        <td>Pop Rock</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover">
                        <th className="text-accent">2</th>
                        <td>Indie</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover">
                        <th className="text-accent">3</th>
                        <td>Alternative</td>
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
              <input type="checkbox"/> 
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
                        <td>The Social</td>
                      </tr>
                      {/* row 2 */}
                      <tr className="hover">
                        <th className="text-accent">2</th>
                        <td>The Beacham</td>
                      </tr>
                      {/* row 3 */}
                      <tr className="hover">
                        <th className="text-accent">3</th>
                        <td>House of Blues</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end of top venues table */}
              </div>
            </div>
            {/* end of top venues collapse table */}
          </div>
          <div className="lg:col-span-2">

            {/* <!-- component --> */}
            <div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
              <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                <li>
                  <a href="#" className="block items-center p-3 sm:flex ">
                    <img className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0" src={userIcon} alt="Jese Leos image"/>
                    <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                      <div className="text-neutral-content text-base"><span className="text-lg text-secondary dark:text-secondary">Jese Leos</span> is going to see Beyonce at The Amway Arena on 8/30/2023</div>
                      <div className="text-sm font-normal">"I can't wait!!!!"</div>
                      <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Posted 2 mins ago
                      </span> 
                      <div className="block items-center mt-1">
                        <button className="btn btn-outline btn-primary btn-sm mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Like
                        </button>
                        <button className="btn btn-outline btn-secondary btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          Comment
                        </button>
                    </div>
                </div>
            </a>
        </li>
    </ol>
</div>
<div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
              <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                <li>
                  <a href="#" className="block items-center p-3 sm:flex ">
                    <img className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0" src={userIcon} alt="Jese Leos image"/>
                    <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                      <div className="text-neutral-content text-base"><span className="text-lg text-secondary dark:text-secondary">Jese Leos</span> is going to see Beyonce at The Amway Arena on 8/30/2023</div>
                      <div className="text-sm font-normal">"I can't wait!!!!"</div>
                      <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Posted 2 mins ago
                      </span> 
                      <div className="block items-center mt-1">
                        <button className="btn btn-outline btn-primary btn-sm mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Like
                        </button>
                        <button className="btn btn-outline btn-secondary btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          Comment
                        </button>
                    </div>
                </div>
            </a>
        </li>
    </ol>
</div>
<div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
              <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                <li>
                  <a href="#" className="block items-center p-3 sm:flex ">
                    <img className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0" src={userIcon} alt="Jese Leos image"/>
                    <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                      <div className="text-neutral-content text-base"><span className="text-lg text-secondary dark:text-secondary">Jese Leos</span> is going to see Beyonce at The Amway Arena on 8/30/2023</div>
                      <div className="text-sm font-normal">"I can't wait!!!!"</div>
                      <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Posted 2 mins ago
                      </span> 
                      <div className="block items-center mt-1">
                        <button className="btn btn-outline btn-primary btn-sm mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Like
                        </button>
                        <button className="btn btn-outline btn-secondary btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          Comment
                        </button>
                    </div>
                </div>
            </a>
        </li>
    </ol>
</div>
<div className="p-5 mb-4 bg-base-100 rounded-lg shadow-lg shadow-base-200/50 dark:bg-base-100 dark:border-base-200 hover:bg-neutral-focus dark:hover:bg-neutral-focus">
              <ol className="mt-3 divide-y divide-bg-primary dark:divide-bg-primary">
                <li>
                  <a href="#" className="block items-center p-3 sm:flex ">
                    <img className="mr-6 mb-3 w-12 h-12 rounded-full sm:mb-0" src={userIcon} alt="Jese Leos image"/>
                    <div className="text-bg-neutral-content dark:text-bg-neutral-content">
                      <div className="text-neutral-content text-base"><span className="text-lg text-secondary dark:text-secondary">Jese Leos</span> is going to see Beyonce at The Amway Arena on 8/30/2023</div>
                      <div className="text-sm font-normal">"I can't wait!!!!"</div>
                      <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg aria-hidden="true" className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                        Posted 2 mins ago
                      </span> 
                      <div className="block items-center mt-1">
                        <button className="btn btn-outline btn-primary btn-sm mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        Like
                        </button>
                        <button className="btn btn-outline btn-secondary btn-sm">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                          Comment
                        </button>
                    </div>
                </div>
            </a>
        </li>
    </ol>
</div>

</div>
</div>


    )
}
