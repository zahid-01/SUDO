import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../Imgs/sudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { socketConnect } from "../../socket";
import API_BASE_URL from "../../config/api";
import axios from "axios";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupError, setSignupError] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setSignupError(true);
      return;
    } else {
      try {
        const res = await axios.post(`${API_BASE_URL}/api/v1/signUp`, {
          name,
          email,
          password,
        });
        console.log(res);
        if (res.data.status === "Success") {
          socketConnect(res.data.token);
          setSignUpSuccess("Signup successfull! You can now login.");
          setConfirmPassword("");
          setName("");
          setEmail("");
          setPassword("");
        } else {
          console.error("Signup failed: ", res.data.message);
        }
      } catch (error) {
        console.error("An error occurred during signup: ", error);
      }
    }
  };

  return (
    <div className="bg-gray-100 my-6 h-[90vh] p-6 rounded-lg shadow-md container mx-auto lg:w-1/3">
      <img src={img} alt="logo" className="w-14 h-14 lg:w-24 lg:h-24 mx-auto" />
      <h2 className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent text-4xl text-center font-extrabold text-gray-800 mb-6 p-2">
        Sign Up
      </h2>
      {signupError && (
        <p className="text-red-500 text-sm mb-4">Passwords do not match</p>
      )}
      {signUpSuccess && (
        <p className="text-green-500 text-lg mb-4">{signUpSuccess}</p>
      )}
      <div className="mb-4">
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleNameChange}
          className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="First & Last Name"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Email "
        />
      </div>
      <div className="mb-4 relative">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-3 cursor-pointer"
        >
          {passwordVisible ? (
            <FontAwesomeIcon icon={faEye} />
          ) : (
            <FontAwesomeIcon icon={faEyeSlash} />
          )}
        </span>
      </div>
      <div className="mb-4">
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Confirm Password"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full tracking-wider hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
        onClick={handleSignup}
      >
        Sign Up
      </button>
      <hr className="mt-6" />
      <Link
        to="/signin"
        className="text-xl font-semibold flex mt-4 text-green-700 tracking-wider hover:text-green-900"
      >
        Already have a account?
      </Link>
    </div>
  );
};

export default SignupForm;
