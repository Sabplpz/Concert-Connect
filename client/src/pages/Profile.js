import React from 'react';


//I've hid all your names in here, find them or perish - Finn

// <button className="btn btn-primary">Like</button>
function profile() {

    return(
      <div>
      <h1 className="pl-10 pb-3 text-6xl">Mia's Page</h1>
      <p class="pl-10 text-lg" >1,000,000 followers | 84 Following 
      <button className='btn btn-secondary ml-7'>Follow</button>
      
      </p>

     
      <ul className='flex flex-row pl-11 text-2xl'>
        <li className="pr-3" ><a href="https://www.coolmathgames.com">Overview</a></li>
        <li className="pr-3"> <a href="https://www.pbskids.org">Concerts</a></li>
        <li className="pr-3"><a href="https://www.indeed.com">Bands</a></li>
        <li className="pr-3"><a href="https://www.poptropica.com">Favorites</a></li>
      </ul>
    <span class="h-1 w-full bg-white lg:w-1/3"></span>
    <body className="pt-10 ">
      <h2 className="text-5xl flex justify-center">Mia has been to 157 Set It Off concerts in the last year</h2>
      <header className='flex flex-row justify-center'>
        <h4 className='px-3'>Top Bands</h4>
        <h4 className='px-20'>Top Genres</h4>
        <h4 className='pl-3'> Top Venues</h4>
      </header>
      
      <div className="container mx-auto flex flex-row justify-center">
          <table className="table-xs border-solid border-2">
            {/* head */}
            <thead>
              <tr className="hover">
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
          {/* <h4>Top Genres</h4> */}
          <table className="table-xs border-solid border-2">
            {/* head */}
            <thead>
              <tr className="hover">
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
          <table className="table-xs border-solid border-2">
            {/* head */}
            <thead>
              <tr className="hover">
                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr className="hover">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr className="hover">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
      </div>
      <h2 className='text-4xl pl-8'>Favorite Concerts</h2>
      <div className="overflow-x-auto pl-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th> 
              <th>Date</th> 
              <th>Concert</th> 
              <th>Venue</th> 
              <th>Location</th> 
              <th>Favorite</th> 
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>1</th> 
              <td>Cy Ganderton</td> 
              <td>Quality Control Specialist</td> 
              <td>Littel, Schaden and Vandervort</td> 
              <td>Canada</td> 
              <input type="checkbox" checked="checked" className="checkbox" /> 
            </tr>
            <tr>
              <th>2</th> 
              <td>Hart Hagerty</td> 
              <td>Desktop Support Technician</td> 
              <td>Zemlak, Daniel and Leannon</td> 
              <td>United States</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>3</th> 
              <td>Brice Swyre</td> 
              <td>Tax Accountant</td> 
              <td>Carroll Group</td> 
              <td>China</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>4</th> 
              <td>Marjy Ferencz</td> 
              <td>Office Assistant I</td> 
              <td>Rowe-Schoen</td> 
              <td>Russia</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>5</th> 
              <td>Yancy Tear</td> 
              <td>Community Outreach Specialist</td> 
              <td>Wyman-Ledner</td> 
              <td>Brazil</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
          
                            
          </tbody> 
        
        </table>
      </div>
      <h2 className='text-4xl pl-8'>Recent Concerts</h2>
      <div className="overflow-x-auto pl-8">
        <table className="table table-xs">
          <thead>
            <tr>
              <th></th> 
              <th>Date</th> 
              <th>Concert</th> 
              <th>Venue</th> 
              <th>Location</th> 
              <th>Favorite</th> 
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>1</th> 
              <td>Cy Ganderton</td> 
              <td>Quality Control Specialist</td> 
              <td>Littel, Sabrina and Mia</td> 
              <td>Canada</td> 
              <input type="checkbox" checked="checked" className="checkbox" /> 
            </tr>
            <tr>
              <th>2</th> 
              <td>Hart Hagerty</td> 
              <td>Desktop Support Technician</td> 
              <td>Zemlak, Daniel and Dion</td> 
              <td>United States</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>3</th> 
              <td>Brice Swyre</td> 
              <td>Tax Accountant</td> 
              <td>Carroll Group</td> 
              <td>China</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>4</th> 
              <td>Marjy Ferencz</td> 
              <td>Office Assistant I</td> 
              <td>Rowe-Schoen</td> 
              <td>Russia</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
            <tr>
              <th>5</th> 
              <td>Yancy Tear</td> 
              <td>Community Outreach Specialist</td> 
              <td>Wyman-Ledner</td> 
              <td>Bobby</td> 
              <input type="checkbox" checked="checked" className="checkbox" />          
            </tr>
          
                            
          </tbody> 
        
        </table>


        <button className="btn btn-primary ml-20">View All Concerts</button>
      </div>
      </body>
    </div>







    


        
    )





}


export default profile



































