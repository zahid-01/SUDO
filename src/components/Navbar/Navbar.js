import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginSliceActions } from "../Store/loginSlice";
import logo from "../Imgs/sudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faSearch,
  faBars,
  faUserFriends,
  faClose,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import API_BASE_URL from "../../config/api";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);
  const [menuOpen, setMenuOpen] = useState(false);
  // console.log(userInfo);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutHandler = async () => {
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/v1/logout`,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          dispatch(loginSliceActions.setLogin(false));
          dispatch(loginSliceActions.setUserInfo(null));
          navigate("/signin");
        }
      })
      .catch((e) => {
        console.log(e);
        alert("Oops! Something went wrong 😥");
      });
  };

  return (
    <nav className="shadow-md p-2">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-semibold">
            <img src={logo} alt="logo" className="w-12 h-12 lg:w-16 lg:h-16" />
          </Link>
          <div className="ml-4 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded-full border border-gray-400 w-64"
            />
            <FontAwesomeIcon icon={faSearch} className="ml-4 w-6 h-6 " />
          </div>
        </div>

        <div className="hidden md:block space-x-12 bg-gray-200 p-4 rounded-lg ">
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faHome} size="2x" />
          </Link>
          <Link
            to="/chat"
            className="text-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faMessage} size="2x" />
          </Link>
          <Link
            to="/friends"
            className="text-blue-500 hover:text-blue-600 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faUserFriends} size="2x" />
          </Link>
        </div>

        <div className="hidden md:block flex items-center">
          {isLoggedIn && (
            <>
              <div className="ml-4">
                <Link to="/chat" className="font-semibold">
                  {userInfo}
                </Link>
              </div>
              <div className="ml-4">
                <button
                  onClick={logoutHandler}
                  className="font-bold text-lg bg-blue-300 p-2 rounded transition-all duration-300 tracking-wider text-red-900 hover:bg-blue-400"
                >
                  Logout
                </button>
              </div>
            </>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-500">
            {menuOpen ? (
              <FontAwesomeIcon icon={faClose} size="2x" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="2x" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden p-4">
          <div className="flex flex-col space-y-2 items-center font-bold tracking-wider">
            <Link to="/" className="text-blue-500 ">
              <FontAwesomeIcon icon={faHome} />
            </Link>
            <Link to="/chat" className="text-blue-500">
              <FontAwesomeIcon icon={faMessage} />
            </Link>
            {isLoggedIn && (
              <div className="ml-4">
                <Link to="/chat" className="font-semibold">
                  {userInfo}
                </Link>
              </div>
            )}
            <button
              onClick={logoutHandler}
              className="font-bold text-lg bg-blue-300 p-2 rounded transition-all duration-300 tracking-wider text-red-900 hover:bg-blue-400"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
