import React from 'react';
import ButtonPic from '../assets/Button.png'


//I've hid all your names in here, find them or perish - Finn


function profile() {

    return(

      <>
      <h1>Mia's Page</h1>
      <h3>1,000,000 followers</h3>
      <button> 
        <img src = {ButtonPic}/>
      </button>
      
      <ul>
        <li><a href="https://www.coolmathgames.com">Overview</a></li>
        <li><a href="https://www.pbskids.org">Concerts</a></li>
        <li><a href="https://www.indeed.com">Bands</a></li>
        <li><a href="https://www.poptropica.com">Favorites</a></li>
      </ul>


      <h2>Mia has been to 157 Set It Off concerts in the last year</h2>

    
    <div className="container mx-auto flex flex-row">
        <h4>Top Bands</h4>
        <table className="table-xs">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
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
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
        <h4>Top Genres</h4>
        <table className="table-xs">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
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
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
        <h4>Top Venues</h4>
        <table className="table-xs">
          {/* head */}
          <thead>
            <tr className="hover">
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
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
            <tr className="hover">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
    </div>
    <h2>Favorite Concerts</h2>
    <div className="overflow-x-auto">
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
    <h2>Recent Concerts</h2>
    <div className="overflow-x-auto">
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

      <button>View All Concerts</button>
    </div>








      </>


        
    )





}


export default profile



































