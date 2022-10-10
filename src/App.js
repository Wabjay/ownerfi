import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Faq from "./pages/Faq";
import Form from "./pages/Form";
import Service from "./pages/Service";
import Blog from "./pages/Blog";
import BlogAdmin from "./pages/BlogAdmin";
import BlogPost from "./pages/BlogPost";
import EditorContainer from "./pages/EditorContainer";

import { useState } from "react";


function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

 

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/form" element={<Form />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/editor" element={<EditorContainer />} />
          <Route path="/blogpost/:post" element={<BlogPost />} />
          <Route path="/blogadmin" element={<BlogAdmin  isAuth={isAuth}/>} />
          <Route path="*" element={<Home />}/>
        </Routes>
        <Footer />
        </Router>
  );
}

export default App;
