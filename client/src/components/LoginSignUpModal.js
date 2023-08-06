import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import close from "../assets/icons/close.png";

import bowie from "../assets/avatars/bowie.png";
import cassette from "../assets/avatars/cassette.png";
import elvis from "../assets/avatars/elvis.png";
import equalizer from "../assets/avatars/equalizer.png";
import pick from "../assets/avatars/guitar-pick.png";
import pedal from "../assets/avatars/guitar-pedal.png";
import headphones from "../assets/avatars/headphones.png";
import hendrix from "../assets/avatars/hendrix.png";
import lennon from "../assets/avatars/lennon.png";
import quaver from "../assets/avatars/quaver.png";
import rose from "../assets/avatars/rose.png";
import simmons from "../assets/avatars/simmons.png";
import star from "../assets/avatars/star.png";
import ticket from "../assets/avatars/ticket.png";
import mirrorball from "../assets/avatars/mirror-ball.png";

function LoginSignUpModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    verifyPassword: "",
  });

  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [addUser, { error: signupError }] = useMutation(ADD_USER);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { username, password, verifyPassword } = formState;

    try {
      if (!isLogin) {
        if (password !== verifyPassword) {
          console.error("Passwords do not match.");
          return;
        }
      }

      if (isLogin) {
        const { data } = await login({ variables: { username, password } });
        Auth.login(data.login.token);
      } else {
        const { data } = await addUser({ variables: { ...formState } });
        Auth.login(data.addUser.token);
      }
      onClose();
    } catch (e) {
      console.error(e);
    }
  };

  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  if (!isOpen) return null;
  return (
    <div
      id="wrapper"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={handleClose}
    >
      <div className="bg-white flex flex-col rounded text-neutral shadow-lg justify-items-center mx-auto mt-4 max-w-4xl">
        <button
          className="text-grey-300 text-xl place-self-end p-2"
          onClick={() => onClose()}
        >
          <img src={close} alt="X to close modal" className="h-4"></img>
        </button>
        {/* <div className="place-self-center p-2"> */}
        <h3 className="text-xl text-center">
          {isLogin ? "Sign in to your account" : "Sign Up"}
        </h3>
        <div>
          <form
            className="mb-0 mt-4 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8"
            onSubmit={handleFormSubmit}
          >
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <input
                    type="text"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="firstName"
                    placeholder="Enter first name"
                    value={formState.firstName}
                    onChange={handleFormChange}
                  />

                  <input
                    type="text"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="lastName"
                    placeholder="Enter last name"
                    value={formState.lastName}
                    onChange={handleFormChange}
                  />

                  <input
                    type="email"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="email"
                    placeholder="Enter email"
                    value={formState.email}
                    onChange={handleFormChange}
                  />

                  <input
                    type="username"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="username"
                    placeholder="Enter username"
                    value={formState.username}
                    onChange={handleFormChange}
                  />

                  <input
                    type="password"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="password"
                    placeholder="Password"
                    value={formState.password}
                    onChange={handleFormChange}
                  />

                  <input
                    type="password"
                    className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                    name="verifyPassword"
                    placeholder="Verify password"
                    value={formState.verifyPassword}
                    onChange={handleFormChange}
                  />
                </div>
                <div className="w-full">
                  <h4 className="text-lg text-neutral text-center">Choose an avatar</h4>
                  <ul className="grid w-full gap-2 grid-cols-3 md:grid-cols-5">
                    <li>
                      <input
                        type="radio"
                        id="icon-1"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-1"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={bowie} alt="Bowie"/>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-2"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-2"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={elvis} alt="Elvis"/>
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-3"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-3"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={hendrix} alt="Hendrix" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-4"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-4"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={lennon} alt="Lennon" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-5"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-5"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={simmons} alt="Simmons" />
                        </div>
                      </label>
                    </li>

                    <li>
                      <input
                        type="radio"
                        id="icon-6"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-6"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={star} alt="Star" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-7"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-7"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={ticket} alt="Ticket" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-8"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-8"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={rose} alt="Rose" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-9"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-9"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={quaver} alt="Quaver" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-10"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-10"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={equalizer} alt="Equalizer" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-11"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-11"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={pick} alt="Pick" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-12"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-12"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={pedal} alt="Pedal" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-13"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-13"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={headphones} alt="Headphone" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-14"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-14"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={cassette} alt="Cassette" />
                        </div>
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="icon-15"
                        name="avatar"
                        className="hidden peer"
                        required
                      />
                      <label
                        for="icon-15"
                        className="inline-flex items-center justify-between w-12 md:w-16 p-3 border border-neutral rounded-lg cursor-pointer peer-checked:border-primary hover:bg-gray-100"
                      >
                        <div className="w-full">
                          <img src={mirrorball} alt="Mirror ball" />
                        </div>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {isLogin && (
              <>
                <input
                  type="text"
                  className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                  name="username"
                  placeholder="Username"
                  value={formState.username}
                  onChange={handleFormChange}
                />

                <input
                  type="password"
                  className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                  name="password"
                  placeholder="Password"
                  value={formState.password}
                  onChange={handleFormChange}
                />
              </>
            )}
            <button
              className="block w-full rounded-lg btn btn-neutral"
              type="submit"
            >
              {isLogin ? "Log In" : "Sign Up"}
            </button>

            {(loginError || signupError) && (
              <p>{loginError?.message || signupError?.message}</p>
            )}
          </form>
        </div>

        <button
          className="mb-3"
          type="button"
          onClick={() => setIsLogin(!isLogin)}
        >
          <span className="underline decoration-neutral">
            {isLogin ? "No account? Sign Up" : "Already have an account? Login"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default LoginSignUpModal;
