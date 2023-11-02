import React, { useState } from "react";
import API_BASE_URL from "../../config/api";
import axios from "axios";

const PostForm = () => {
  const [postText, setPostText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePostChange = (e) => {
    setPostText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    let postData = {};
    if (postText.trim() !== "") {
      postData.text = postText;
    }
    console.log(postData);
    await axios({
      method: "POST",
      url: `${API_BASE_URL}/api/v1/userPost`,
      data: {
        postText: postData.text,
      },
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === "Success") {
          setPostText("");
          setSelectedImage(null);
        }
        if (res.status === 203) {
          alert("Failed to create the post.");
        }
      })
      .catch((error) => {
        alert("Error while making the API request", error);
      });
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="What's on your mind?"
          value={postText}
          onChange={handlePostChange}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-2"
        />

        {selectedImage && (
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Img"
            className="mb-2 rounded-lg max-h-40"
          />
        )}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold tracking-wider py-2 px-4 rounded-lg flex mx-auto"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
