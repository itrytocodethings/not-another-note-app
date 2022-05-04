//react utils
import React, { useState, useRef, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

//styles/icons/etc
import "../../assets/css/editor.css";
import { IoArrowBack } from "react-icons/io5";
import { BsEye, BsEyeSlash, BsInfoCircle } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";

//components
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";
import ContentEditable from "react-contenteditable";
import { marked } from "marked";

// store
import { Context } from "../store/Context";

const NoteEditor = (props) => {
  const { store, actions } = useContext(Context);
  const loc = useLocation();
  const note = loc.state.note;
  //using ref because useState doesn't work with ContentEditable package. per docs use 'useRef' instead.
  const text = useRef(note.body);
  let textMD = useRef(marked.parse(text.current));
  const editor = useRef(null);
  const [showMD, setShowMD] = useState(false);

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
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    //testing show MD
                    showMD ? setShowMD(false) : setShowMD(true);
                  }}
                >
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
                innerRef={editor}
                className="editor edit-field px-2"
                html={!showMD ? text.current : textMD.current}
                disabled={!showMD ? false : true}
                onChange={(e) => {
                  //sets text ref .current with what is input into the editor.
                  text.current = e.target.value;
                  //used editor ref to get innerText from editor so markdown would format correctly, innerText not defined on ContentEditable package component.
                  textMD.current = marked.parse(editor.current.innerText);
                }}
                onBlur={(e) => {
                  //when the editor is unFocus
                  //using innerText to get value without HTML tags.
                  text.current;
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
