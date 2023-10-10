import React from "react";
import styles from "./ChatCard.module.css";

const ChatCard = ({ title, content }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles["card-title"]}>{title}</h2>
      <p className={styles["card-content"]}>{content}</p>
    </div>
  );
};

export default ChatCard;
