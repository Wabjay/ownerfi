
import React from "react";
// import Blog from "../../images/blog_img.png";
import { Link } from "react-router-dom";
import "./BlogCard.css"


const BlogCard = ({pics, date, content, author, id}) => {
   console.log(id)
 return (
     <div className="blogCard">
        <img src={pics} alt="" className="blogList_img"/>
       <Link to={{pathname:`/blogpost/${id}`,
       state: {id: id}
       }}>
        <p className="date">{date}</p>
        <p className="blogTopic">{content}</p>
        <p className="author">{author}</p>
        </Link>
     </div>
  );
};

export default BlogCard;
