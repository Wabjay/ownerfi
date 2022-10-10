import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, orderBy } from "firebase/firestore";
import { db } from "../firebase-config";
import BlogCard from "../components/Blogcard/BlogCard";

function Blog() {
  // const [isLoading, setIsLoading] = useState(true);
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");
  // const orders = orderBy("post", "desc")

   useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(doc)
    };

    getPosts();
  }, []);

  // console.log(postLists)
  return (
    <>
    {/* {!isLoading && ( */}
      <div className="blogList_banner"><p>Blog</p></div>
    <div className="blogList">
      {postLists.map((post) => {
        return (
            <BlogCard 
            pics={post.image}
            id={post.id}
            content={post.title}
            author={post.author && post.author.name}
            date={post.date}
        />)}
      )}
    </div>
  {/* )} */}
  </>
  );
}

export default Blog;
