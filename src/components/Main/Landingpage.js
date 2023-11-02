import React from "react";
import FriendRequests from "../Friends/friendrequest";
import Friends from "../Friends/friends";
import Navbar from "../Navbar/Navbar";
import LoginPage from "../login/login";
import PostData from "../Main/postData";
import PostForm from "./AddPost";
const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="hidden md:block">
            <LoginPage />
          </div>
          <div className="md:col-span-2">
            <PostForm />
            <PostData />
          </div>
          <div className="hidden md:block md:col-span-1">
            <FriendRequests />
            <Friends />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
