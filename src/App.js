import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./components/login/login";
import Chat from "./components/chat/chatEntry/Chat";
import SignupForm from "./components/signup/signup";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Main/Landingpage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/signin", element: <LoginPage /> },
  { path: "/signup", element: <SignupForm /> },
  { path: "/", element: <Navbar /> },
  { path: "/chat", element: <Chat /> },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
