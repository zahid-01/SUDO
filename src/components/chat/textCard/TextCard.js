import React from "react";

function formatISOTime(isoTimeString) {
  const date = new Date(isoTimeString);
  const hour = date.getHours();
  const minute = date.getMinutes();
  const amPm = hour >= 12 ? "PM" : "AM";
  const formattedHour = (hour % 12 || 12).toString().padStart(2, "0");
  const formattedMinute = minute.toString().padStart(2, "0");
  return `${formattedHour}:${formattedMinute} ${amPm}`;
}
function TextCard(props) {
  const isMine = props.sender === props.currentChat?.userName;
  const alignmentClass = isMine ? "justify-end" : "justify-start";
  const bgColorClass = isMine ? "bg-blue-500" : "bg-gray-500";

  const regularTime = formatISOTime(props.time);
  return (
    <div className={`flex ${alignmentClass}`}>
      <div className={`max-w-sm w-auto ${bgColorClass} rounded-xl p-4 mb-2`}>
        <p className="text-white font-semibold">{props.text}</p>
        <p className="text-white mt-2 text-sm text-end">{regularTime}</p>
      </div>
    </div>
  );
}

export default TextCard;
