import { useState, useEffect } from "react";

import styles from "./Chat.module.css";
import { socket } from "../../../socket";

import ChatCard from "../chatCard/ChatCard";
import TextCard from "../textCard/TextCard";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [texts, setTexts] = useState([]);
  const [name, setName] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (message.trim() !== "") {
      console.log(message);
      socket.emit("private_message", message, "zahid@sudo.com");
      setMessage("");
    }
  };

  const setChatWindow = (userName) => {
    setName(userName);
  };

  useEffect(() => {}, []);

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
    <div className={styles.mainContainer}>
      <div className={styles.sidebar}>
        <ChatCard
          chatInfo={{ userName: "zahid", lastMessage: "hello there" }}
          chatWindow={setChatWindow}
        />
      </div>
      <div className={styles.chatWindow}>
        <div>
          <h1>{name}</h1>
          {texts.map((text) => (
            <TextCard text={text} />
          ))}
        </div>
        <div className={styles.textArea}>
          <input onChange={handleMessageChange}></input>
        </div>
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
