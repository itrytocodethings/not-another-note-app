import React, {useContext, useEffect, useState, useRef} from "react";
import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { CgNotes, CgHome } from "react-icons/cg";
import defaultPic from "../../assets/img/blank.png";
import "../../assets/css/sidebar.css";
import { Context } from "../store/Context";

const SideBar = (props) => {
  const {store, actions} = useContext(Context);
  const sideBarRef = useRef(null); //ref for sideBar

  useEffect(() => {
    //if navBar shown(mobile device), set focus on the aside element. 
    if (store.showNav) sideBarRef.current.focus();
  },[store.showNav]);

  return (
    <aside className={`sidebar ${store.showNav ? 'show' : ''}`} tabIndex={store.showNav ? 0 : null} ref={sideBarRef} onBlur={() => {
      actions.setShowNav();
    }}>
      <header className="sidebar-header">
        <div className="sidebar-header-content px-3 py-3">
          <h3>Hello, World</h3>
        </div>
      </header>
      <div className="container-fluid">
        <div className="sidebar-content d-flex flex-column justify-content-between py-3">
          <div>
            <nav class="nav main-nav flex-column">
              <NavLink to="/" className="nav-link">
                <CgNotes />
                <span>Notes</span>
              </NavLink>
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
  );
};

export default SideBar;
