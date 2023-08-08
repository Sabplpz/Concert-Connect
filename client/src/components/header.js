import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/header.css";
import Logo from "../assets/logo/ConcertConnectLogo.png";
import Auth from "../utils/auth";
import Avatar from "../utils/avatar";
import LoginSingUpModal from "./LoginSignUpModal";
import search from "../assets/icons/search.png";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  const avatar = Avatar.getAvatar();

  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const loggedInMenu = (
    <div className="md:flex md:justify-stretch">
      <Link to="/add-concert">
        <button className="hidden md:btn md:btn-outline btn-secondary md:mr-6 md:shrink">
          Add Concert
        </button>
      </Link>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-12 rounded-full shrink-0">
            <img src={Avatar.handleAvatar(avatar)} alt="user icon" />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <Link to="/profile" className="justify-between">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/feed" className="justify-between">
              Feed
            </Link>
          </li>
          <li>
            <Link to="/add-concert" className="justify-between md:hidden">
              Add Concert
            </Link>
          </li>
          <li onClick={logout}>
            <Link to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  const preLoginMenu = (
    <div>
              
      <button
        className="btn btn-outline btn-primary md:mt-0"
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
    <div className="navbar bg-base-200 flex md:flex-wrap flex-row justify-stretch">
      <div className="basis-1/2 justify-start">
        <div>
          <Link to="/">
            <img
              src={Logo}
              alt="Concert-Connect logo"
              className="w-20 md:w-32 btn-ghost"
            />
          </Link>
        </div>
      </div>

      {/* Possible future feature of looking up concerts*/}
      {/* <div className="basis-1/2 justify-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Concerts"
            className="input input-bordered input-primary w-64 md:w-96"
          />
        </div>
      </div> */}

      <div className="basis-1/2 justify-end">
        <Link to="/concerts">
          <button className="btn btn-outline btn-primary mr-6 mb-1 shrink">
            <img src={search} className="w-3"/> <p className="hidden lg:contents ">Search Concerts</p>
          </button>
        </Link>

        {handleLogin()}
      </div>
      



    </div>
  );
};

export default Header;
