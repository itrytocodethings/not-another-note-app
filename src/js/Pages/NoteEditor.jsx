import React, { useState, useRef, useContext } from "react";
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";
import ContentEditable from "react-contenteditable";

import "../../assets/css/editor.css";
import { IoArrowBack } from "react-icons/io5";
import { BsEye, BsEyeSlash, BsInfoCircle } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/Context";

const NoteEditor = (props) => {
  const { store, actions } = useContext(Context);
  const loc = useLocation();
  const note = loc.state.note;
  //using ref because useState doesn't work with ContentEditable package. per docs use 'useRef' instead.
  const text = useRef(note.body);

  return (
    <div className="editor-container">
      <div className="content d-flex">
        <SideBar />
        <MainContent>
          <header className="editor-header">
            <div className="editor-header-content d-flex justify-content-between px-3 py-3">
              <div className="editor-right d-flex">
                <Link to="/">
                  {" "}
                  <button className="btn btn-primary">
                    <IoArrowBack />
                  </button>
                </Link>
              </div>
              <div className="editor-right d-flex">
                <button className="btn btn-primary">
                  <BsEye />
                </button>
                <button className="btn btn-primary">
                  <BsInfoCircle />
                </button>
                <button className="btn btn-primary">
                  <HiOutlineDotsCircleHorizontal />
                </button>
              </div>
            </div>
          </header>
          <div className="editor container-fluid">
            <div className="editor-content py-3">
              <ContentEditable
                className="editor edit-field px-2"
                html={text.current}
                onChange={(e) => {
                  text.current = e.target.value;
                  console.log(text.current);
                }}
                onBlur={(e) => {
                  let plainText = e.target.innerText;
                  actions.saveNote(loc.state.index, text.current, plainText);
                }}
              />
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default NoteEditor;
