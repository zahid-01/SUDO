import React from "react";

function ChatCard(props) {
  return (
    <div
      className="bg-white flex p-3 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
      onClick={() => props.chatWindow(props.chatInfo.userName)}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        {/* Add avatar or user image here */}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{props.chatInfo.userName}</h3>
        <p className="text-gray-500">{props.chatInfo.lastMessage}</p>
      </div>
    </div>
  );
}

export default ChatCard;
