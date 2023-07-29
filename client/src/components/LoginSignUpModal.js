import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER, SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';

function LoginSignUpModal({ isOpen, onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    verifyPassword: ''
  });

  const [login, { error: loginError }] = useMutation(LOGIN_USER);
  const [signup, { error: signupError }] = useMutation(SIGNUP_USER);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formState;

    try {
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

  return isOpen ? (
    <div>
      <h3>{isLogin ? 'Login' : 'Sign Up'}</h3>

      <form onSubmit={handleFormSubmit}>
        {!isLogin && (
          <>
            <input type="text" name="firstName" placeholder="First Name" value={formState.firstName} onChange={handleFormChange} />

            <input type="text" name="lastName" placeholder="Last Name" value={formState.lastName} onChange={handleFormChange} />

            <input type="text" name="username" placeholder="Username" value={formState.username} onChange={handleFormChange} />

            <input type="password" name="verifyPassword" placeholder="Verify Password" value={formState.verifyPassword} onChange={handleFormChange} />
          </>
        )}

        <input type="email" name="email" placeholder="Email" value={formState.email} onChange={handleFormChange} />

        <input type="password" name="password" placeholder="Password" value={formState.password} onChange={handleFormChange} />

        <button type="submit">
          {isLogin ? 'Log In' : 'Sign Up'}
        </button>

        {(loginError || signupError) && (
          <p>
            {loginError?.message || signupError?.message}
          </p>
        )}
      </form>

      <button type="button" onClick={() => setIsLogin(!isLogin)}>
        Switch to {isLogin ? 'Sign Up' : 'Login'}
      </button>
    </div>
  ) : null;
}

export default LoginSignUpModal;
