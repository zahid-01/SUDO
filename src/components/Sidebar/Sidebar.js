import {
  faBell,
  faCompass,
  faEdit,
  faEnvelope,
  faLink,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <div class="bg-gray-400 h-screen overflow-y-auto">
      <div class="p-4">
        <div class="flex items-center space-x-2">
          <div class="h-10 w-10 bg-white rounded-full"></div>
          <div class="text-white">
            <p class="font-bold tracking-wider">User</p>
            <p class="text-sm">@user123</p>
          </div>
        </div>
        <a
          href="/"
          class="mt-4 flex items-center text-xl text-white hover:text-blue-500"
        >
          <FontAwesomeIcon icon={faEdit} className="text-black mr-2 h-6 w-6" />
          Edit Profile
        </a>
      </div>

      <div class="flex flex-col space-y-8 p-4 font-semibold tracking-wider h-full text-xl">
        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faUser} className="text-black mr-2 h-6 w-6" />
          Your Profile
        </a>

        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon
            icon={faCompass}
            className="text-black mr-2 h-6 w-6"
          />{" "}
          Explore
        </a>

        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faBell} className="text-black mr-2 h-6 w-6" />{" "}
          Notifications
        </a>

        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-black mr-2 h-6 w-6"
          />{" "}
          Messages
        </a>
      </div>

      <div class="flex gap-4 flex-col p-4 text-white text-xl">
        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 1
        </a>
        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 2
        </a>
        <a href="/" class="flex items-center text-white hover:text-blue-500">
          <FontAwesomeIcon icon={faLink} className="text-black mr-2 h-6 w-6" />{" "}
          Link 3
        </a>
      </div>
    </div>
  );
}
export default Sidebar;
