import React, {useContext} from "react";
import {Context} from '../store/Context'

// Components
import SideBar from "../Components/Sidebar";

export const NoteApp = () => {
  const {store, actions} = useContext(Context);
  return (
    <div className="app-container">
      <div className="content d-flex">
        <SideBar />
        <main className="main-content">
          <div className="container-fluid">main</div>
        </main>
      </div>
    </div>
  );
};