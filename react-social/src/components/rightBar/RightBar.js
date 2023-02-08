import React from 'react'
import './rightbar.css'
import  {Users} from '../../dummyData'
import Online from '../onlineFriends/Online'
export default function RightBar({profile}) {

//Render this right bar component when it is the home page
  const HomeRightBar = () => {
    //was missing return here, hence this component was not getting rendered on the home page
    return (
    <>
       <div className="birthdayContainer">
        <img className='birthdayImage' src="assets/gift.png" alt="" />
        <span className="birthdayText"><b>Pola Foster</b> and <b>3 other friends </b>today</span>
      </div>
      <img className = 'rightBarAd' src="assets/ad.png" alt="" />
      <h4 className="rightBarTitle">Online friends</h4>

      <ul className="rightBarFriendList">
      {Users.map(u => {
        return <Online key = {u.id} user = {u}/>
      })}
      </ul>
    </>
    )
  }

  //Render this right bar component when it is the profile page

  const ProfileRightBar = () => {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
      <>
      {/* Title for user personal informat */}
      <h4 className='rightBarTitle'>User information title</h4>
      <div className="rightBarInfo">
      <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">City:</span>
        <span className="rightBarInfoValue">Hyderabad</span>
      </div>

       <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">From:</span>
        <span className="rightBarInfoValue">Patna</span>
      </div>

       <div className="rightBarInfoItem">
        <span className="rightBarInfoKey">Realtionship:</span>
        <span className="rightBarInfoValue">Single</span>
      </div>
      </div>
      {/* Title for following */}
       <h4 className='rightBarTitle'>User Friends</h4>

      {/* Outer block for all the followers */}
     <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/1.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/2.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/3.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/4.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/5.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/6.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/9.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
          <div className="rightBarFollowing">
            <img
              src={`${PF}person/10.jpeg`}
              alt=""
              className="rightBarFollowingImage"
            />
            <span className="rightBarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='rightBar'>
      <div className="rightBarWrapper">
        {/* we are passing one out of these two components depending on the fact whether requested page is profile page (with a profile prop)  or the home page (without a prop)*/}
         {profile ? <ProfileRightBar/> : <HomeRightBar/>}
          {/* <HomeRightBar/> */}
         {/* <ProfileRightBar/>   */}
      </div>
    </div>
  )
}
