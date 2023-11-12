import { faComment, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import API_BASE_URL from "../../config/api";
import Like from "./Like";
import Share from "./share";
import Comment from "./comment";

const Post = ({ post, setFriendRequests }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.postLikes.length);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState(post.postComments || []);

  const addComment = async function () {
    let commentData;
    if (newComment.trim() !== "") {
      commentData = newComment;
    }
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/v1/userPost/${this}`,
      data: {
        comment: commentData,
      },
      withCredentials: true,
    })
      .then(() =>
        setComments((comments) => [
          ...comments,
          { user: this, comment: commentData },
        ])
      )
      .catch((e) => console.log(e));
  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  const regularTime = new Date(post.date).toLocaleString();

  const toggleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLiked(!liked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md my-4 md:my-6 lg:my-6 tracking-wider">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <img
            src="user-profile-image.jpg"
            alt="User"
            className="w-10 h-10 rounded-full mr-4"
          />
          <div>
            <span className="font-semibold text-lg md:text-xl lg:text-2xl">
              {post.userId.name}
            </span>
            <p className="text-gray-500">{regularTime}</p>
          </div>
        </div>

        <button className={`text-gray-600 hover:text-blue-500 `}>
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <p className="mt-2 text-xl md:text-base lg:text-xl">{post.postText}</p>
      <img
        src="https://unsplash.com/photos/REAMd8gKbPc/download?ixid=M3wxMjA3fDB8MXx0b3BpY3x8NnNNVmpUTFNrZVF8fHx8fDJ8fDE2OTgzODg4MzZ8&force=true&w=1920"
        alt="Post"
        className="w-full h-2/3 mt-4 object-cover"
      />

      <div className="mt-4">
        <div className="flex justify-between items-center space-x-4">
          <Like liked={liked} likeCount={likeCount} toggleLike={toggleLike} />

          <button
            onClick={toggleComments}
            className="text-gray-600 hover:text-blue-500 flex items-center"
          >
            <FontAwesomeIcon icon={faComment} />
            <span className="ml-2">
              {showComments ? "Hide Comments" : "Comment"}
            </span>
          </button>
          <Share />
        </div>
        {showComments && (
          <div>
            <div className="mt-4">
              <div className="space-y-4">
                {comments.map((comment, index) => (
                  <Comment key={index} comment={comment} />
                ))}
              </div>
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Add a comment..."
                className="w-full border rounded p-2"
                value={newComment}
                onChange={handleCommentChange}
              />
              <button
                onClick={addComment.bind(post._id)}
                className="bg-blue-500 text-white rounded p-2 ml-2 mt-2"
              >
                Post
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
