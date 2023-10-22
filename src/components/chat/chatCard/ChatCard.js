import styles from "./ChatCard.module.css";

function ChatCard(props) {
  return (
    <div
      className={styles.chatCard}
      onClick={props.chatWindow.bind(null, props.chatInfo.userName)}
    >
      <div className={styles.avatar}>{/* Add avatar or user image here */}</div>
      <div className={styles.chatInfo}>
        <h3>{props.chatInfo.userName}</h3>
        <p>{props.chatInfo.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatCard;
