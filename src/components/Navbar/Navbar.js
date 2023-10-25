import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import API_BASE_URL from "../../config/api";
import loginSliceActions from "../Store/loginSlice";

const Navbar = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, userInfo } = useSelector((state) => state.login);
  console.log(userInfo);

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
        alert("oops! something went wrong😥");
      });
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          Your Logo
        </Link>
        <ul className="flex space-x-4">
          {isLoggedIn ? (
            <li>
              <Link to="/chat" className={"text-white font-bold"}>
                {userInfo}
              </Link>
              <button
                onClick={logoutHandler}
                className="bg-blue-500 text-white px-2 py-1 rounded-full font-semibold hover:bg-red-500 ml-2"
              >
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to="/" className={"text-white font-bold"}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/signup" className={"text-white font-bold"}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
