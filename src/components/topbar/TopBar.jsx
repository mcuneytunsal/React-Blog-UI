import "./TopBar.css"
import { Link } from "react-router-dom"

export default function TopBar() {
  return (
    <div className="top">

        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
            <i className="topIcon fa-brands fa-pinterest"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to={'/'} style={{textDecoration:"none", color:'inherit'}}>HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to={'/write'} style={{textDecoration:"none", color:'inherit'}} >WRITE</Link>
                </li>
                <li className="topListItem">
                    <Link to={'/single'} style={{textDecoration:"none", color:'inherit'}} >RANDOM</Link>
                </li>
                <li className="topListItem">CONTACT</li>
            </ul>
        </div>
        
        
        <div className="topRight">
            <img className="topImg" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>

    </div>
  )
}
