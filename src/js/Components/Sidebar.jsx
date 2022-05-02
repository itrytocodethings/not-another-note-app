import React, {useContext, useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { CgNotes, CgHome } from "react-icons/cg";
import defaultPic from "../../assets/img/blank.png";
import "../../assets/css/sidebar.css";
import { Context } from "../store/Context";

const SideBar = (props) => {
  const {store, actions} = useContext(Context);
  const sideBarRef = useRef(null);
  const closeNav = () => {
    actions.setShowNav();
  }

  return (
    <div onClick={(e) => {
      if (store.showNav && !sideBarRef.current.contains(e.target)) closeNav()
    }}>
        <aside className={`sidebar ${store.showNav ? 'show' : ''}`} ref={sideBarRef}>
      <header className="sidebar-header">
        <div className="sidebar-header-content px-3 py-3">
          <h3>Hello, World</h3>
        </div>
      </header>
      <div className="container-fluid">
        <div className="sidebar-content d-flex flex-column justify-content-between py-3">
          <div>
            <nav class="nav main-nav flex-column">
              <NavLink to="/" className="nav-link mb-2">
                <CgNotes />
                <span>Notes</span>
              </NavLink>
              {/* <NavLink to="/editor" className="nav-link">
                <CgNotes />
                <span>Editor</span>
              </NavLink> */}
            </nav>
          </div>
          <div className="user">
            <div className="user-container d-flex">
              <div className="img">
                <img src={defaultPic} className="img-fluid" alt="" />
              </div>
              <p>Profile</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
    <div id="side-overlay" className={`overlay ${store.showNav ? 'show':''}`}></div>
    </div>
  );
};

export default SideBar;
