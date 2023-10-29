import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Like = ({ liked, likeCount, toggleLike }) => {
  return (
    <button
      onClick={toggleLike}
      className="text-gray-600 hover:text-blue-500 flex items-center"
    >
      {liked ? (
        <FontAwesomeIcon icon={faThumbsUp} className="text-blue-500" />
      ) : (
        <FontAwesomeIcon icon={faThumbsUp} />
      )}
      <span className="ml-2">{liked ? "Liked" : "Like"}</span>
      <span className="ml-2">{likeCount}</span>
    </button>
  );
};

export default Like;
