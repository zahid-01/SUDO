import React from "react";
import styles from "./TextCard.module.css";

function TextCard(props) {
  return (
    <div className={`${styles.textCard} ${props.isMine ? styles.mine : ""}`}>
      <p>{props.text}</p>
    </div>
  );
}

export default TextCard;
