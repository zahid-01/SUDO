// import { useState, useEffect } from "react";

// // import styles from "./Chat.module.css";
// import { socket } from "../../../socket";

// import ChatCard from "../chatCard/ChatCard";
// import TextCard from "../textCard/TextCard";

// const Chat = () => {
//   const [message, setMessage] = useState("");
//   const [texts, setTexts] = useState([]);
//   const [name, setName] = useState("");

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = () => {
//     if (message.trim() !== "") {
//       console.log(message);
//       socket.emit("private_message", message, "zahid@sudo.com");
//       setMessage("");
//     }
//   };

//   const setChatWindow = (userName) => {
//     setName(userName);
//   };

//   useEffect(() => {

//   }, []);

//   useEffect(() => {
//     const newMessageHandler = (msg) => {
//       setTexts((oldTexts) => [...oldTexts, msg]);
//     };
//     socket.on("privateMessage", newMessageHandler);

//     return () => {
//       socket.on("my_message", newMessageHandler);
//     };
//   }, []);

//   return (
//     <div className="flex h-screen">
//       <div className="w-1/4 bg-gray-100 border-r border-gray-200 p-4">
//         <ChatCard
//           chatInfo={{ userName: "zahid", lastMessage: "Hello there..." }}
//           chatWindow={setChatWindow}
//         />

//       </div>
//       <div className="w-3/4 p-4 flex flex-col bg-white">
//         <div className="bg-green-500 p-4 rounded">
//           <h1 className="text-white text-2xl">{name}</h1>
//         </div>
//         <div className="flex-1 overflow-y-auto p-4">
//           {texts.map((text, index) => (
//             <TextCard key={index} text={text} />
//           ))}
//         </div>
//         <div className="p-4">
//           <div className="flex border rounded-lg p-2">
//             <input
//               type="text"
//               className="flex-1 focus:outline-none"
//               placeholder="Type a message..."
//               onChange={handleMessageChange}
//             />
//             <button
//               className="bg-green-500 hover:bg-green-600 text-white px-4 ml-2 py-2 rounded-lg"
//               onClick={handleSubmit}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chat;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { socket } from "../../../socket";
import ChatCard from "../chatCard/ChatCard";
import TextCard from "../textCard/TextCard";
import API_BASE_URL from "../../../config/api";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [texts, setTexts] = useState([]);
  const [name, setName] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/v1/me`);
      console.log(response);
      if (response.data.status === "success") {
        setUserList(response.chats.chatHistory);
      } else {
        console.error("API failure:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching user list:", error);
    }
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      socket.emit("private_message", message, "zahid@sudo.com");
      setMessage("");
    }
  };

  const setChatWindow = (userName) => {
    setName(userName);
  };

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
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-100 border-r border-gray-200 p-4">
        {userList.map((user, index) => (
          <ChatCard key={index} chatInfo={user} chatWindow={setChatWindow} />
        ))}
      </div>
      <div className="w-3/4 p-4 flex flex-col bg-white">
        <div className="bg-green-500 p-4 rounded">
          <h1 className="text-white text-2xl">{name}</h1>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {texts.map((text, index) => (
            <TextCard key={index} text={text} />
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
  );
};

export default Chat;
