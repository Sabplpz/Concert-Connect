import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/header.css";
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
    <div className="md:flex md:justify-stretch">
      <a href="/add-concert">
        <button className="hidden md:btn md:btn-outline btn-secondary md:mr-6 md:shrink">
          Add Concert
        </button>
      </a>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full shrink-0">
            <img src={userIcon} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
        >
          <li>
            <a href="/profile" className="justify-between">
              Profile
            </a>
          </li>
          <li>
            <a href="/feed" className="justify-between">
              Feed
            </a>
          </li>
          <li>
            <a href="/add-concert" className="justify-between md:hidden">
              Add Concert
            </a>
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
        className="btn btn-outline btn-primary mt-5 md:mt-0"
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
    <div className="navbar bg-base-100 flex md:flex-wrap flex-row justify-stretch">
      <div className="basis-1/4 justify-start">
        <div>
          <a href="/">
            <img
              src={Logo}
              alt="Concert-Connect logo"
              className="w-20 md:w-32 btn-ghost"
            />
          </a>
        </div>
      </div>
      <div className="basis-1/2 justify-center">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search Concerts"
            className="input input-bordered input-primary w-64 md:w-96"
          />
        </div>
      </div>
      <div className="basis-1/4 justify-end">{handleLogin()}</div>
    </div>
  );
};

export default Header;
