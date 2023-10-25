import React from "react";

function ChatCard(props) {
  return (
    <div
      className="bg-white flex p-3 border-b border-gray-300 hover:bg-gray-100 cursor-pointer"
      onClick={() => props.chatWindow(props.chatInfo)}
    >
      <div className="w-12 h-12 rounded-full overflow-hidden">
        {/* Add avatar or user image here */}
      </div>
      <div className="ml-4">
        <h3 className="text-xl font-semibold">{props.chatInfo.userName}</h3>
        <p>{new Date().toLocaleTimeString()}</p>

        {/* <p className="text-gray-500">
          {props.chatInfo.lastMessage ? (
            props.chatInfo.lastMessage.map((message, index) => (
              <div
                key={index}
                className="bg-green-200 text-black p-2 rounded-lg mb-2 max-w-2/3 mx-auto"
              >
                <div className="font-semibold">{message.sender}:</div>
                <div>{message.message}</div>
                <div className="text-sm text-gray-600">{message.timestamp}</div>
              </div>
            ))
          ) : (
            <span>No messages available</span>
          )}
        </p> */}
      </div>
    </div>
  );
}

export default ChatCard;
