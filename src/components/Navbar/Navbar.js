import Logo from "../../images/logo.png";
import "./Navbar.css"
import React, { useState, useEffect } from "react";
import Grid from "../../images/grid.png";
import { Link } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";



const Navbar = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, [isAuth]);

  const [show, setShow] = useState(false);

  const linkClick = () => {
    show && setShow(false);
    console.log(show);
  };
  const imageClick = () => {
    show ? setShow(false) : setShow(true);
    console.log(show);
  };
  return (

    <div className="navbar" id="navbar">
      {(() => {
        if (matches) {
          return (
            <div className="navbar_content">

              <Link to="/">
                <img src={Logo} alt="" />
              </Link>

              <div className="nav_links">
                <ul>
                  {!isAuth ? (
                    <>
                      <li>
                        <Link to="/">How it works</Link>
                      </li>
                      <li>
                        <Link to="/editor">Who is it for</Link>
                      </li>
                      <li>
                        <Link to="/faq">FAQ</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>

                      <li><Link to="/login"> Login </Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link to="/createpost"> Create Post </Link></li>
                      <li><Link to="/blogadmin">Admin Blog </Link></li>
                      <li><button onClick={signUserOut}> Log Out</button></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          );
        } else {
          return (
            <div className="navbar_content">

              <Link to="/">
                <img src={Logo} alt="" />
              </Link>


              <img
                src={Grid}
                className="dropdown"
                onClick={() => imageClick()}
                alt=""
              />
              <div className="nav_links" style={{ display: show && "block" }}>
                <ul className="mobile_ul">
                  {!isAuth ? (
                    <>
                      <li>
                        <Link to="/" onClick={() => linkClick()}>How it works

                        </Link>
                      </li>
                      <li>
                        <Link to="/service" onClick={() => linkClick()}>Who is it for

                        </Link>
                      </li>
                      <li>
                        <Link to="/faq" onClick={() => linkClick()}>FAQ</Link>
                      </li>
                      <li>
                        <Link to="/blog" onClick={() => linkClick()}>Blog</Link>
                      </li>

                      <li><Link to="/login" onClick={() => linkClick()}> Login</Link></li>
                    </>
                  ) : (
                    <>
                      <li><Link to="/createpost" onClick={() => linkClick()}> Create Post </Link></li>
                      <li><Link to="/blogadmin" onClick={() => linkClick()}>Admin Blog </Link></li>
                      <li><button onClick={signUserOut}> Log Out</button></li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          );
        }
      })()}
    </div>

    // }

  );
};

export default Navbar;
