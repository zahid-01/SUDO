import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import API_BASE_URL from "../../config/api";
import { socketConnect } from "../../socket";

import img from "../Imgs/sudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { loginSliceActions } from "../Store/loginSlice";
import { useDispatch } from "react-redux";
const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [toggleVisibility, setToggleVisibility] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleToggleVisibility = () => {
    setToggleVisibility(!toggleVisibility);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/v1/login`,
      data: {
        email,
        password,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          dispatch(loginSliceActions.setLogin(true));
          dispatch(loginSliceActions.setUserInfo(res.data.userData));
          socketConnect(res.data.token);
          navigate("/chat");
        }
        if (res.status === 203) {
          setLoginError(true);
          setErrorMessage(res.data.message);
          setTimeout(() => {
            setLoginError(false);
            setErrorMessage("");
          }, 3000);
        }
      })
      .catch((e) => {
        setLoginError(true);
        console.log(e);
        return;
      });
  };
  return (
    <div className="min-h-screen flex flex-col gap-10  items-center justify-center lg:grid lg:grid-cols-2 lg:place-items-center bg-zinc-100 p-4">
      <div>
        <h1 className="text-center bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent text-5xl lg:text-8xl font-bold">
          SUDO
        </h1>
        <p className="text-sm text-center font-semibold lg:text-2xl tracking-wider mt-4">
          SUDO connects you with your Family in life❤
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md container lg:w-1/2">
        <img
          src={img}
          alt="logo"
          className="w-20 h-20 mx-auto mb-4 bg-black rounded-full lg:w-32 lg:h-32"
        />
        <h2 className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent text-4xl text-center font-extrabold text-gray-800 mb-6 p-2">
          Login
        </h2>
        {loginError && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email or Phone Number"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={toggleVisibility ? "text" : "password"}
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border rounded p-3 text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Password"
          />
          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={handleToggleVisibility}
          >
            {toggleVisibility ? (
              <FontAwesomeIcon icon={faEye} />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} />
            )}
          </span>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full tracking-wider hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 w-full"
          onClick={handleSubmit}
        >
          Log in
        </button>
        <a
          href="/"
          className="text-blue-600 mt-4 flex justify-center text-xl tracking-wider hover:underline hover:text-red-600"
        >
          Forgot Password?
        </a>
        <hr className="mt-4" />
        <Link
          to="/signup"
          className="p-2 flex justify-center font-bold tracking-wider bg-green-600 mt-4 rounded-full text-white hover:bg-green-700"
        >
          Create new account?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
