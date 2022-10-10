import React, { useState, useEffect } from "react";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage, db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {
  const [formData, setFormData] = useState({
    title: "",
    postText: "",
    author: {},
    image: "",
    date: Timestamp.now().toDate(),
  });

  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  let navigate = useNavigate();

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  
  const handlePublish = () => {
    if (!formData.title || !formData.postText || !formData.image) {
      alert("Please fill all the fields");
      return;
    }

    const storageRef = ref(
      storage,
      `/images/${Date.now()}${formData.image.name}`
    );

    const uploadImage = uploadBytesResumable(storageRef, formData.image);

    uploadImage.on(
      "state_changed",
      (snapshot) => {
        const progressPercent = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progressPercent);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setFormData({
          title: "",
          postText: "",
          image: "",
        });

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

        getDownloadURL(uploadImage.snapshot.ref).then((url) => {
          const postsCollectionRef = collection(db, "posts");
          addDoc(postsCollectionRef, {
            title: formData.title,
            postText: formData.postText,
            image: url,
            author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
            date:  date,
          })
            .then(() => {
              navigate("/blogadmin");
              console.log(postsCollectionRef)
            })
            .catch((err) => {
              // toast("Error adding article", { type: "error" });
            });
        });
      }
    );
  };

  // const createPost = async () => {
  //   await addDoc(postsCollectionRef, {
  //     title,
  //     postText,
  //     author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
  //     date:  Timestamp.now().toDate(),
  //     image: "",
  //   });
  //   navigate("/blogadmin");
  //   console.log(postsCollectionRef)
  // };
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="createPostPage">
      <div className="cpContainer">
        <h1>Create A Post</h1>
        <div className="inputGp">
          <label> Title:</label>
          <input
          name="title"
            placeholder="Title..."
            value={formData.title}
              onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="inputGp">
          <label> Post:</label>
          <textarea
            placeholder="Post..."
            name="postText"
            className="form-control"
            value={formData.postText}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="inputGp">
          <label> Title:</label>
          <input type="file"
            placeholder="upload image"
              name="image"
              accept="image/*"
              className="form-control"
              onChange={(e) => handleImageChange(e)}
          />
        </div>
        {progress === 0 ? null : (
            <div className="progress">
              <div
                className="progress-bar progress-bar-striped mt-2"
                style={{ width: `${progress}%` }}
              >
                {`uploading image ${progress}%`}
              </div>
            </div>
          )}
        <button onClick={handlePublish}> Submit Post</button>
      </div>
    </div>
  );
}

export default CreatePost;
