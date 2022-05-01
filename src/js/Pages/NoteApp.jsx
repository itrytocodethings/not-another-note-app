import React, {useContext} from "react";
import {Context} from '../store/Context'

//styles
import '../../assets/css/notes.css'

// Components
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

//icons
import {BsFilePlus} from 'react-icons/bs';

export const NoteApp = () => {
  const {store, actions} = useContext(Context);
  return (
    <div className="app-container">
      <div className="content d-flex">
        <SideBar />
        <MainContent>
          <header className="notes-header">
            <div className="notes-header-content py-3 px-3 d-flex justify-content-between">
              <h3>Notes</h3>
              <button className="btn btn-primary"><BsFilePlus /></button>
            </div>
          </header>
          <div className="container-fluid">
            <div className="notes-content">
              hello world
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};