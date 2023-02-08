import React from "react";
import "./topBar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from 'react-router-dom'

export default function TopBar() {
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <Link to='/' style={{textDecoration :"none"}}>
        <span className="logo">Buzz socials</span>
        </Link>
        
      </div>

      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Search for friend,post or video"
          />
        </div>
      </div>
      
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">TimeLine</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topBarImage" />
        </div>
      </div>
    </div>
  );
}
