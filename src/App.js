import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/login/login";
import Chat from "./components/chat/chatEntry/Chat";
import SignupForm from "./components/signup/signup";

import LandingPage from "./components/Main/Landingpage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { loginSliceActions } from "./components/Store/loginSlice";
import API_BASE_URL from "./config/api";
import Footer from "./components/Footer/Footer";

axios.defaults.withCredentials = true;
const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <LoginPage /> },
  { path: "/signup", element: <SignupForm /> },
  { path: "/chat", element: <Chat /> },
]);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkLoginState = async () => {
      await axios({
        method: "GET",
        url: `${API_BASE_URL}/api/v1/isLoggedIn`,
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch(loginSliceActions.setLogin(true));
            dispatch(loginSliceActions.setUserInfo(res.data.userData));
          } else {
            dispatch(loginSliceActions.setLogin(false));
            dispatch(loginSliceActions.setUserInfo(null));
          }
        })
        .catch((e) => console.log(e));
    };

    checkLoginState();
  }, [dispatch]);
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          <div className="loader animate-spin rounded-full h-32 w-32 border-t-8 border-b-8 border-green-900"></div>
        </div>
      }
    >
      <>
        <RouterProvider router={router} />
        <Footer />
      </>
    </Suspense>
  );
};

export default App;
