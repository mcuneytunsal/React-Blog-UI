import "./Header.css"

import React from 'react'

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitleSm">My React.js</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src="https://www.gardeningknowhow.com/wp-content/uploads/2017/07/hardwood-tree.jpg" alt=""></img>
    </div>
  )
}
