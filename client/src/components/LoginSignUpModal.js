import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER, ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import close from "../assets/close.png";

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
      <div className="bg-white flex flex-col rounded text-neutral shadow-lg justify-items-center mx-auto mt-4 max-w-md">
        <button
          className="text-grey-300 text-xl place-self-end p-2"
          onClick={() => onClose()}
        >
          <img src={close} alt="X to close modal" className="h-4"></img>
        </button>
        {/* <div className="place-self-center p-2"> */}
          <h3 className="text=xl text-center">{isLogin ? "Sign in to your account" : "Sign Up"}</h3>
        <div>
          <form className="mb-0 mt-4 space-y-4 rounded-lg p-4 sm:p-6 lg:p-8" onSubmit={handleFormSubmit}>
            {!isLogin && (
              <>
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
                  type="password"
                  className="w-full bg-neutral-content rounded-lg border-base-100 p-4 pe-12 text-sm shadow-sm"
                  name="verifyPassword"
                  placeholder="Verify password"
                  value={formState.verifyPassword}
                  onChange={handleFormChange}
                />
              </>
            )}

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

            <button className="block w-full rounded-lg btn btn-neutral" type="submit">{isLogin ? "Log In" : "Sign Up"}</button>

            {(loginError || signupError) && (
              <p>{loginError?.message || signupError?.message}</p>
            )}
          </form>
        </div>

        <button className="mb-3"type="button" onClick={() => setIsLogin(!isLogin)}>
           <span className="underline decoration-neutral">{isLogin ? "No account? Sign Up" : "Already have an account? Login"}</span>
        </button>
      </div>
    </div>
  );
}

export default LoginSignUpModal;
