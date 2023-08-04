import React from "react";
import { useState, useEffect } from "react";
import Profile from "../assets/placeholder-image.png";
import Logo from "../assets/ConcertConnectLogo.png";
import Auth from "../utils/auth";
import LoginSingUpModal from "./LoginSignUpModal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const loggedInMenu = (
    <div>
      <button className="btn btn-outline btn-secondary">Add Concert</button>
      <button className="btn btn-outline btn-primary m-2">Profile</button>
      <button className="btn btn-outline btn-terciary" onClick={logout}>
        Log Out
      </button>
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
    <div className="navbar bg-base-100">
      <div className="flex-1 w-32">
        <a href="/">
          <img src={Logo} alt="Concert-Connect logo" className="w-32" />
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-56 md:w-auto"
          />
        </div>
        <div>{handleLogin()}</div>
      </div>
    </div>
  );
};

export default Header;
