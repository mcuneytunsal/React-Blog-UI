import "./Post.css"

export default function Post() {
  return (
    <div className="post">
        <span className="postTitle">Title</span>
        <img className="postImg" src="https://res.cloudinary.com/dtpgi0zck/image/upload/s--AEi5Ocv---/c_fill,h_580,w_860/v1/EducationHub/photos/the-great-wall-of-china.jpg" alt="" />
        <span className="postCtg">Travel</span>
        <p className="postTxt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat, alias quidem nihil minima consequuntur saepe natus illo, libero odit reprehenderit, velit atque? Odio amet totam asperiores et, adipisci optio.</p>
        <div className="bosbeles">
            <span className="postAuthor">Author</span>
            <span className="postDate">Date</span>
        </div>
    </div>
  )
}
