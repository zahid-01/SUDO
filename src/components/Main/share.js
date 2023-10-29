import { faShareSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Share = () => {
  return (
    <button className="text-gray-600 hover:text-blue-500 flex items-center">
      <FontAwesomeIcon icon={faShareSquare} />
      <span className="ml-2">Share</span>
    </button>
  );
};

export default Share;
