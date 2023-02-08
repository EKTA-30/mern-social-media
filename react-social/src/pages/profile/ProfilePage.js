import React from "react";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import TopBar from "../../components/topBar/TopBar";
import Feed from "../../components/feed/Feed";
import "./profile.css";
//this page consists of components
///top bar, a profile container and several nested components and 
//a right bad component with a prop
export default function profilePage() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <>
      <TopBar />
      <div className="profileContainer">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImage"
                src={`${PF}post/3.jpeg`}
                alt="cover"
              />
              <img
                className="prfoleUserImage"
                src={`${PF}person/7.jpeg`}
                alt="profilePic"
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Ekta Kumari</h4>
                 <span className="profileInfoDesc">Hello, My friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            {/* Was not calling it with the props --> profile */}
            <RightBar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
