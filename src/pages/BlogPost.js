import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../firebase-config";
import Image from "../images/back_icon.png"
import { useParams, useLocation, useNavigate  } from 'react-router-dom';

function BlogPost() {
  
   let params  = useParams();
   console.log(params.post)

  const [post, setPost] = useState({});
  const getCollectionRef = doc(db, "posts", params.post);
  const location = useLocation();
  const navigate = useNavigate();
console.log(location)
   useEffect(() => {
    const getPost = async () => {
      const data = await getDoc(getCollectionRef);
    
      setPost(data.data());
  //  console.log(doc)
   };

    getPost();
  }, []);

  console.log(post)
  return (
    <div className="blogPost">
      <button
        className="back"
        onClick={()=> navigate(-1)}
        type="button" >
        <img src={Image}  alt=""/>
        <p>Back</p>
      </button>
      <div className="blogContent">
      <p className="post_title">{post.title}</p>
      <div className="flex_author">
      <p className="post_author">By {post.author && post.author.name}</p>
      <p className="post_date">{post.date}</p>
      </div>
      <div>
        <img src={post.image} alt="" className="postImg"/>
        <p className="blogText">{post.postText}</p>
      </div>


        
      </div>
        {/* // title=
        // content={post.title}
        // author={post.author?.name} 
        date={post.date}*/}
    </div>
  );
}

export default BlogPost;
