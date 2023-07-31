import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';

const Header = () => {
    const logout = (event) => {
        event.preventDefault();
        Auth.logout();
    };
    return (
        <div className="navbar bg-base-100">
            <h1>HEADER</h1>
            {/* <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl" to="/">OUR LOGO HERE?!</Link>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <Link to="/profile">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="The user's profile pic" />  {/* TODO: Replace with a personalized pic */}
                        {/* </Link>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/settings">Settings</Link></li> {/* TODO: Change this later */}
                    {/* <li><Link to="/logout">Logout</Link></li>
                </ul> */}
                {/* </div> */}
            {/* </div> */} 
        </div> 
    );
};

export default Header;