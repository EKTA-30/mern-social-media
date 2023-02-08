import React from "react";
import "./closeFriends.css";
export default function CloseFriends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div>
      <li className="sideBarFriend">
        <img
          className="sideBarFriendImage"
          src={PF+user.profilePicture}
          alt="img"
        />
        <span className="sideBarFriendName">{user.userName}</span>
      </li>
    </div>
  );
}
