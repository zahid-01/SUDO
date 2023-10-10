import { useState } from "react";
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
      socket.emit("chat message", message);
      setMessage("");
    }
  };

  socket.on("my message", (msg) => {
    console.log("jolaaa");
    setTexts((oldTexts) => [...oldTexts, msg]);
  });

  return (
    <>
      {texts.map((text) => (
        <ChatCard title={"User"} content={text} />
      ))}
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
    </>
  );
};

export default Chat;
