import React from "react";
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

import '../../assets/css/editor.css'
import {IoArrowBack} from 'react-icons/io5';

const NoteEditor = () => {
  return (
    <div className="app-container">
      <div className="content d-flex">
        <SideBar />
        <MainContent>
          <header className="editor-header">
            <div className="editor-header-content d-flex justify-content-between">
              <IoArrowBack />
            </div>
          </header>
          <div className="editor container-fluid">
            <div className="editor-content" contentEditable>
              hello world
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default NoteEditor;
