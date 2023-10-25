import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket } from "../../../socket";
import ChatCard from "../chatCard/ChatCard";
import TextCard from "../textCard/TextCard";
import API_BASE_URL from "../../../config/api";
import Navbar from "../../Navbar/Navbar";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [texts, setTexts] = useState([]);
  const [userList, setUserList] = useState([]);
  const [currentChat, setCurrentChat] = useState();

  useEffect(() => {
    fetchUserChat();
  }, []);

  const fetchUserChat = async () => {
    await axios({
      method: "GET",
      url: `${API_BASE_URL}/api/v1/users/chats`,
      withCredentials: true,
    })
      .then((res) => setUserList(res.data.chats.chatHistory))
      .catch((e) => console.log(e));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      socket.emit("private_message", message, "mateen@sudo.com");
      setMessage("");
    }
  };

  const setChatWindow = (userName) => {
    setCurrentChat(userName);
  };
  console.log(currentChat);
  useEffect(() => {
    const newMessageHandler = (msg) => {
      setTexts((oldTexts) => [...oldTexts, msg]);
    };
    socket.on("privateMessage", newMessageHandler);

    return () => {
      socket.on("my_message", newMessageHandler);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="w-1/4 bg-gray-100 border-r border-gray-200 p-4">
          {userList.map((user, index) => (
            <ChatCard
              key={index}
              chatInfo={{
                userName: user.userId.name,
                messages: user.messages,
              }}
              chatWindow={setChatWindow}
            />
          ))}
        </div>
        <div className="w-3/4 p-4 flex flex-col bg-white">
          <div className="bg-green-500 p-4 rounded">
            <h1 className="text-white text-2xl">{currentChat?.userName}</h1>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            {currentChat?.messages.map(({ message, sender, timeStamp }) => (
              <TextCard
                key={Math.random()}
                text={message}
                time={timeStamp}
                sender={sender}
              />
            ))}
          </div>
          <div className="p-4">
            <div className="flex border rounded-lg p-2">
              <input
                type="text"
                className="flex-1 focus:outline-none"
                placeholder="Type a message..."
                onChange={handleMessageChange}
                value={message}
              />
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 ml-2 py-2 rounded-lg"
                onClick={handleSubmit}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
