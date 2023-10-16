import { useState, useEffect } from "react";

import styles from "./Chat.module.css";
import ChatCard from "./ChatCard";
import { socket } from "../../socket";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [texts, setTexts] = useState([]);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("private_message", message, "hadi@sudo.com");
      setMessage("");
    }
  };

  useEffect(() => {
    const newMessageHandler = (msg) => {
      setTexts((oldTexts) => [...oldTexts, msg]);
    };
    socket.on("privateMessage", newMessageHandler);

    return () => {
      socket.off("my_message", newMessageHandler);
    };
  }, []);

  return (
    <>
      <ul>
        {texts.map((text) => (
          <li key={Math.random()}>
            <ChatCard title={"User"} content={text} />
          </li>
        ))}
      </ul>
      <div className={styles.container}>
        <form className={styles.chatForm} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="Type a message..."
            value={message}
            onChange={handleMessageChange}
          />
          <button onClick={handleSubmit} className={styles.sendButton}>
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;