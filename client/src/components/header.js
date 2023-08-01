import React from 'react';
import Profile from '../assets/placeholder-image.png';
import Logo from '../assets/ConcertConnectLogo.png';
// import { Link } from 'react-router-dom';
// import Auth from '../utils/auth';

const Header = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href="/">
                    <img src={Logo} alt="Concert-Connect logo" style={{width: "200px", height: "200px"}}/>
                </a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={Profile} alt="profile" style={{width: "200px", height: "200px"}}/>
                    </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/Bands">Bands</a></li>
                    <li><a href="/Concerts">Concerts</a></li>
                    <li><a href="/Venues">Venues</a></li>
                    <li><a href="/Profile">Profile</a></li>
                </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;