import React from "react";

const Friends = () => {
  const friends = [
    { id: 1, name: "Aadil" },
    { id: 2, name: "Haris" },
  ];

  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-lg font-semibold mb-4">Friends</h2>
      <ul>
        {friends.map((friend) => (
          <li key={friend.id} className="mb-2">
            <span className="font-semibold">{friend.name}</span>
            <button className="text-blue-500 ml-2">Message</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Friends;
