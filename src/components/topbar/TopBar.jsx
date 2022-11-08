import "./TopBar.css"

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
                <li className="topListItem">HOME</li>
                <li className="topListItem">POST</li>
                <li className="topListItem">ABOUT</li>
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
