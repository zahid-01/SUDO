import React from "react";

function ChatCard(props) {
  return (
    <div
      className="bg-white flex p-3 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
      onClick={() => props.chatWindow(props.chatInfo)}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://unsplash.com/photos/iFgRcqHznqg/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjk5MzYxMzIwfA&force=true&w=1920"
          alt="logo"
        />
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{props.chatInfo.userName}</h3>
        <p>{new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}

export default ChatCard;
