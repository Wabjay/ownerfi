import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function BlogAdmin({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");


  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, [deletePost]);

  return (
    <div className="homePage blogList">
      {postLists.map((post) => {
        return (
            <div className="blogCard">
              <img src={post.image} alt="" className="blogList_img" />
              <div className="adminDelete">
                <div>
                  <p className="date">{post.date}</p>
                  <p className="author">{post.author && post.author.name}</p>
                </div>
                <div className="deletePost">
                  {isAuth && post.author.id === auth.currentUser.uid && (
                    <button
                      onClick={() => {
                        deletePost(post.id);
                      }}
                    >
                      &#128465;
                    </button>
                  )}
                </div>
              </div>

              <p className="blogTopic">{post.title}</p>
            <div className="postTextContainer"> { post.postText = post.postText.substring(0,200)} </div>
            </div>
        );
      })}
    </div>
  );
}

export default BlogAdmin;
