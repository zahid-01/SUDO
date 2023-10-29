import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config/api";
import loginSliceActions from "../Store/loginSlice";
import logo from "../Imgs/sudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logoutHandler = async () => {
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/v1/login`,
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          dispatch(loginSliceActions.setLogin(false));
          dispatch(loginSliceActions.setUserInfo(null));
          navigate("/");
        }
      })
      .catch(() => {
        alert("Oops! Something went wrong 😥");
      });
  };

  return (
    <nav className="shadow-md shadow-blue-300 p-2 mb-4 w-full">
      <div className="lg:ml-4 flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white text-xl font-bold">
            <img src={logo} alt="logo" className="w-12 h-12 lg:w-24 lg:h-24" />
          </Link>
          <div className="ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 rounded border border-gray-400"
            />
            <button className="bg-blue-500 text-white px-2 py-2 tracking-wider rounded-full font-semibold ml-2 hidden lg:inline">
              Search
            </button>
          </div>
        </div>
        <div className="lg:hidden">
          <button
            className="text-black"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? (
              <FontAwesomeIcon
                icon={faClose}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="w-6 h-6 md:w-8 md:h-8"
              />
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden py-2 text-center tracking-wider">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-white font-bold bg-blue-500 p-4 rounded hover:bg-blue-600"
              >
                Home
              </Link>
              <Link
                to="/chat"
                className="text-white font-bold bg-blue-500 p-4 rounded hover:bg-blue-600"
              >
                Chat
              </Link>
            </div>
          </div>
        )}

        {menuOpen && (
          <div className="lg:hidden py-2 text-center tracking-wider">
            <div className="flex flex-col space-y-4"></div>
          </div>
        )}

        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-white font-bold bg-blue-500 p-4 rounded hover:bg-blue-600"
          >
            Home
          </Link>

          <Link
            to="/chat"
            className="text-white font-bold bg-blue-500 p-4 rounded hover:bg-blue-600"
          >
            Chat
          </Link>
        </div>
        <div className="flex items-center">
          <ul className="flex space-x-4">
            {isLoggedIn && (
              <li>
                <Link to="/chat" className="text-black font-bold">
                  {userInfo}
                </Link>
                <button
                  onClick={logoutHandler}
                  className="bg-blue-500 text-black px-2 py-1 rounded-full font-semibold hover:bg-red-500 ml-2"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
