import React from 'react'
import RightBar from '../../components/rightBar/RightBar'
import SideBar from '../../components/sideBar/SideBar'
import TopBar from '../../components/topBar/TopBar'
import Feed from '../../components/feed/Feed'
import './home.css'
//rfc creates a sample react component structure for us
//one page many components (imported)
//shared components with or without props
export default function Homepage() {
  return (
  <>
    <TopBar/>
    <div className="homeContainer">
   <SideBar/>
   <Feed/>
   <RightBar/>
   </div>
  </>
  )
}
