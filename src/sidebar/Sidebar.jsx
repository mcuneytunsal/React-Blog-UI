import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        
        <div className="sidebarItem">
            <span className="sidebarTitle">About Blog</span>
            <img className="sidebarImg" src="https://www.reliablesoft.net/wp-content/uploads/2019/12/free-images-for-blogs.jpg" alt=""></img>
            <p className="sidebarTxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae corporis ullam illo consequatur, </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Travel</li>
                <li className="sidebarListItem">Techonology</li>
                <li className="sidebarListItem">Art</li>
            </ul>
        </div>

    </div>
  )
}
