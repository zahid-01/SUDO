import React from "react";

const Comment = ({ comment }) => {
  return (
    <div className="flex items-center">
      <img
        src="user-profile-image.jpg"
        alt="User"
        className="w-8 h-8 rounded-full mr-2"
      />
      <div>
        <span className="font-semibold">{comment.user}</span>
        <p>{comment.comment}</p>
      </div>
    </div>
  );
};

export default Comment;
