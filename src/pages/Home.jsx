import "./Home.css"
import Header from "../header/Header"

import React from 'react'
import Posts from "../posts/Posts"
import Sidebar from "../sidebar/Sidebar"
import NavArrows from "../navArrows/NavArrows"


export default function Home() {
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <div className="sideBartest">
          <Sidebar/>
          <NavArrows/>  
        </div>
      </div>
    </>
  )
}
