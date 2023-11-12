import axios from "axios";
import { useEffect, useState } from "react";
import API_BASE_URL from "../../config/api";
import Post from "../Main/posts";

const PostData = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`${API_BASE_URL}/api/v1/userPost/feed`, { withCredentials: true })
        .then((response) => {
          const apiPosts = response.data.posts;
          setPosts(apiPosts);
          console.log(apiPosts);
        })
        .catch((error) => {
          console.error("Error fetching data from the API: " + error);
        });
    };
    getData();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostData;
