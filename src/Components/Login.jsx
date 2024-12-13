import React, { useState } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => setIsSignup((prev) => !prev);

  return (
    <StyledWrapper>
      <div className="container">
        <input
          id="signup_toggle"
          type="checkbox"
          checked={isSignup}
          onChange={toggleForm}
        />
        <form className="form">
          <div className={`form_front ${isSignup ? 'flip' : ''}`}>
            <div className="form_details">Login</div>
            <input type="text" className="input" placeholder="Username" />
            <input type="password" className="input" placeholder="Password" />
            <button className="btn">Login</button>
            <span className="switch">
              Don't have an account?{' '}
              <label htmlFor="signup_toggle" className="signup_tog">
                Sign Up
              </label>
            </span>
          </div>

          <div className={`form_back ${isSignup ? 'flip' : ''}`}>
            <div className="form_details">SignUp</div>
            <input type="text" className="input" placeholder="Firstname" />
            <input type="text" className="input" placeholder="Username" />
            <input type="password" className="input" placeholder="Password" />
            <input type="password" className="input" placeholder="Confirm Password" />
            <button className="btn">Signup</button>
            <span className="switch">
              Already have an account?{' '}
              <label htmlFor="signup_toggle" className="signup_tog">
                Sign In
              </label>
            </span>
          </div>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  background-color: #212121; /* Fixed dark background */
  color: white; /* White text color */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    transition: all 1s ease;
  }

  .form .form_front,
  .form .form_back {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    position: absolute;
    backface-visibility: hidden;
    padding: 65px 45px;
    border-radius: 15px;
    box-shadow: inset 2px 2px 10px rgba(0, 0, 0, 1),
      inset -1px -1px 5px rgba(255, 255, 255, 0.6);
    transition: transform 1s;
  }

  .form .form_front {
    transform: rotateY(0);
  }

  .form .form_back {
    transform: rotateY(-180deg);
  }

  .form .form_front.flip {
    transform: rotateY(180deg);
  }

  .form .form_back.flip {
    transform: rotateY(0);
  }

  .form_details {
    font-size: 25px;
    font-weight: 600;
    padding-bottom: 10px;
  }

  .input {
    width: 245px;
    min-height: 45px;
    color: white; /* Text color for input */
    outline: none;
    transition: 0.35s;
    padding: 0px 7px;
    background-color: #212121; /* Input background for dark mode */
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
      1px 1px 10px rgba(255, 255, 255, 0.6);
  }

  .input::placeholder {
    color: #999;
  }

  .input:focus {
    transform: scale(1.05);
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
      1px 1px 10px rgba(255, 255, 255, 0.6),
      inset 2px 2px 10px rgba(0, 0, 0, 1),
      inset -1px -1px 5px rgba(255, 255, 255, 0.6);
  }

  .btn {
    padding: 10px 35px;
    cursor: pointer;
    background-color: #212121; /* Dark background for button */
    border-radius: 6px;
    border: 2px solid #212121;
    box-shadow: 6px 6px 10px rgba(0, 0, 0, 1),
      1px 1px 10px rgba(255, 255, 255, 0.6);
    color: white; /* Button text color */
    font-size: 15px;
    font-weight: bold;
    transition: 0.35s;
  }

  .btn:hover {
    transform: scale(1.05);
  }

  .form .switch {
    font-size: 13px;
  }

  .form .switch .signup_tog {
    font-weight: 700;
    cursor: pointer;
    text-decoration: underline;
  }

  .container #signup_toggle {
    display: none;
  }
`;

export default Form;
