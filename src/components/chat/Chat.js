// ChatInput.js
import React, { useState } from "react";
import styles from "./Chat.module.css";

const Chat = () => {
  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      console.log(message);
      setMessage("");
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.chatForm} onSubmit={handleSubmit}>
        <input
          type="text"
          className={styles.inputField}
          placeholder="Type a message..."
          value={message}
          onChange={handleMessageChange}
        />
        <button type="submit" className={styles.sendButton}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
