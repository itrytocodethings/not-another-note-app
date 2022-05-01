import React from "react";
import { NavLink } from "react-router-dom";
import { BiHomeSmile } from "react-icons/bi";
import { CgNotes, CgHome } from "react-icons/cg";
import defaultPic from "../../assets/img/blank.png";
import "../../assets/css/sidebar.css";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <div className="container-fluid">
        <header className="sidebar-header">
          <div className="sidebar-content d-flex flex-column justify-content-between py-3">
            <div>
              <h3>Hello, World</h3>
              <nav class="nav main-nav flex-column">
                <NavLink to="/" className="nav-link">
                  <CgHome/>
                  <span>Home</span>
                </NavLink>
                <NavLink to="/notes" className="nav-link">
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
        </header>
      </div>
    </aside>
  );
};

export default SideBar;
