import "./Home.css"
import Header from "../../components/header/Header"

import React from 'react'
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/sidebar/Sidebar"
import NavArrows from "../../components/navArrows/NavArrows"


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
