import React, { useEffect } from "react";
import FriendRequests from "../Friends/friendrequest";
import Friends from "../Friends/friends";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

import PostData from "../Main/postData";
import PostForm from "./AddPost";
import Sidebar from "../Sidebar/Sidebar";

axios.defaults.withCredentials = true;

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <div className="mt-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="md:col-span-2 overflow-auto h-screen scrollbar-hide">
            <PostForm />
            <PostData />
          </div>
          <div className="hidden md:block md:col-span-1">
            <div className="overflow-auto h-screen">
              <FriendRequests />
              <Friends />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
