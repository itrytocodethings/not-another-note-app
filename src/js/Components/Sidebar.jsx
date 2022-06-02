import React, {useContext, useEffect, useState, useRef} from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { BiHomeSmile } from "react-icons/bi";
import { CgNotes, CgHome } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi"

import defaultPic from "../../assets/img/blank.png";
import "../../assets/css/sidebar.css";

import { Context } from "../store/Context";

const SideBar = (props) => {
  const {store, actions} = useContext(Context);
  const sideBarRef = useRef(null);
  const navigate = useNavigate()
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
          <h3>Hello, {store.user ? `${store.user.username[0].toUpperCase()}${store.user.username.substring(1)}` : ''}</h3>
        </div>
      </header>
      <div className="container-fluid">
        <div className="sidebar-content d-flex flex-column justify-content-between py-3">
          <div>
            <nav className="nav main-nav flex-column">
              <NavLink to="/" className="nav-link mb-2">
                <CgNotes />
                <span>Notes</span>
              </NavLink>
            </nav>
          </div>
          <div className="user">
            <div className="user-container d-flex justify-content-between">
              <div className="d-flex">
              <div className="img">
                <img src={defaultPic} className="img-fluid" alt="" />
              </div>
              <p>Profile</p>
              </div>
              <div className="d-flex align-items-center">
                <button href="" className="btn btn-primary" id="logout" onClick={() => {
                  actions.logout();
                  navigate("/")
                }}>
                  <FiLogOut />
                </button>
              </div>
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
