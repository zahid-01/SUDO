import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
const FriendRequests = () => {
  const friendRequests = [
    { id: 1, name: "Zahid" },
    { id: 2, name: "Mateen" },
  ];
  const [showFriendRequests, setFriendRequests] = useState(false);
  const toggleFriendRequests = () => {
    setFriendRequests(!showFriendRequests);
  };

  return (
    <div className="bg-white p-4 md:p-6 lg:p-8 rounded-lg shadow-md my-4 md:my-6 lg:my-8">
      <div className="flex items-center justify-between">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
          Friend Requests
        </h2>
        <button onClick={toggleFriendRequests}>
          <FontAwesomeIcon
            icon={showFriendRequests ? faChevronUp : faChevronDown}
          />
        </button>
      </div>
      {showFriendRequests && (
        <ul>
          {friendRequests.map((request) => (
            <li key={request.id} className="mb-2">
              <span className="font-semibold">{request.name}</span>
              <button className="bg-blue-500 text-white ml-2 px-2 py-1 rounded">
                Accept
              </button>
              <button className="text-red-500 ml-2">Ignore</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FriendRequests;
