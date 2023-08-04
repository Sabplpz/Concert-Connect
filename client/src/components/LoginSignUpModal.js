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
  const [signup, { error: signupError }] = useMutation(ADD_USER);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password, verifyPassword } = formState;

    try {
      if (!isLogin) {
        if (password !== verifyPassword) {
          console.error("Passwords do not match.");
          return;
        }
      }

      if (isLogin) {
        const { data } = await login({ variables: { email, password } });
        Auth.login(data.login.token);
      } else {
        const { data } = await signup({ variables: { ...formState } });
        Auth.login(data.signup.token);
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
      <div className="w-96 bg-white flex flex-col rounded text-black justify-items-center">
        <button
          className="text-grey-300 text-xl place-self-end p-2"
          onClick={() => onClose()}
        >
          <img src={close} alt="X to close modal" className="h-4"></img>
        </button>
        <div className="place-self-center p-2">
          <h3>{isLogin ? "Login" : "Sign Up"}</h3>

          <form onSubmit={handleFormSubmit}>
            {!isLogin && (
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formState.firstName}
                  onChange={handleFormChange}
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formState.lastName}
                  onChange={handleFormChange}
                />

                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formState.username}
                  onChange={handleFormChange}
                />

                <input
                  type="password"
                  name="verifyPassword"
                  placeholder="Verify Password"
                  value={formState.verifyPassword}
                  onChange={handleFormChange}
                />
              </>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formState.email}
              onChange={handleFormChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleFormChange}
            />

            <button type="submit">{isLogin ? "Log In" : "Sign Up"}</button>

            {(loginError || signupError) && (
              <p>{loginError?.message || signupError?.message}</p>
            )}
          </form>
        </div>

        <button type="button" onClick={() => setIsLogin(!isLogin)}>
          Switch to {isLogin ? "Sign Up" : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginSignUpModal;
