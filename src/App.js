import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./components/login/login";
import Chat from "./components/chat/chatEntry/Chat";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage /> },
  { path: "/chat", element: <Chat /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
