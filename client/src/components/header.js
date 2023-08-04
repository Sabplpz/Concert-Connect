import React from "react";
import { useState, useEffect } from "react";
import Profile from "../assets/placeholder-image.png";
import Logo from "../assets/ConcertConnectLogo.png";
import Auth from "../utils/auth";
import LoginSingUpModal from "./LoginSignUpModal";
import userIcon from "../assets/user.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const loggedInMenu = (

    <div>
    <a href="/add-concert"><button className="btn btn-outline btn-secondary">Add Concert</button></a>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userIcon} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a href="/profile" className="justify-between">
            Profile
            {/* <span className="badge">New</span> */}
          </a>
        </li>
        <li><a onClick={logout}>Logout</a></li>
      </ul>
    </div>
    </div>
  );

  const preLoginMenu = (
    <div>
      <button
        className="btn btn-outline btn-primary"
        onClick={() => setShowModal(true)}
      >
        LogIn
      </button>
      <LoginSingUpModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      ></LoginSingUpModal>
    </div>
  );

  const handleLogin = () => {
    if (Auth.loggedIn() === true) {
      return loggedInMenu;
    } else {
      return preLoginMenu;
    }
  };

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar-start">
        <a href="/">
          <img src={Logo} alt="Concert-Connect logo" className="w-32 btn-ghost" />
        </a>
      </div>
      <div className="navbar-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Concerts"
            className="input input-bordered input-primary w-96"
          />
        </div>
        
      </div>
      <div className="navbar-end ">{handleLogin()}</div>
    </div>
  );
};

export default Header;
