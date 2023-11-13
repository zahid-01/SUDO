import {
  faBell,
  faCompass,
  faEdit,
  faEnvelope,
  faLink,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Sidebar() {
  const { userInfo } = useSelector((state) => state.login);
  return (
    <div className="bg-gray-400 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-white rounded-full"></div>
          <div className="text-white">
            <p className="font-bold uppercase text-black tracking-wider">
              {userInfo}
            </p>
            <p className="text-sm">@{userInfo}</p>
          </div>
        </div>
        <a
          href="/"
          className="mt-4 flex items-center text-xl text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faEdit} className="text-black mr-2 h-6 w-6" />
          Edit Profile
        </a>
      </div>

      <div className="flex flex-col space-y-8 p-4 font-semibold tracking-wider h-full text-xl">
        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faUser} className="text-black mr-2 h-6 w-6" />
          Your Profile
        </a>

        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon
            icon={faCompass}
            className="text-black mr-2 h-6 w-6"
          />{" "}
          Explore
        </a>

        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faBell} className="text-black mr-2 h-6 w-6" />{" "}
          Notifications
        </a>

        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-black mr-2 h-6 w-6"
          />{" "}
          Messages
        </a>
      </div>

      <div className="flex gap-4 flex-col p-4 text-white text-xl">
        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 1
        </a>
        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 2
        </a>
        <a
          href="/"
          className="flex items-center text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 3
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
