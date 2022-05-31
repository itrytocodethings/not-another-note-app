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
  //using ref because using state with onInput contentEditable div does not play nice.
  const text = useRef(note.body);
  const editor = useRef(null);
  //state to determine if the editor is in edit mode or the showMD (show markdown) mode. 
  const [showMD, setShowMD] = useState(false);

  useEffect(() => {
    /* 
      when showMD changes the innerHTML of the editor element should reflect the raw user input (text.current). if ShowMD true display the parsed markdown for preview.
    */
    !showMD ? editor.current.innerHTML = text.current : editor.current.innerHTML = marked.parse(editor.current.innerText);
  },[showMD])

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
              <div className="editor edit-field p-2" ref={editor} contentEditable={!showMD ? true : false} onInput={(e) => {
                text.current=e.target.innerHTML;
                console.log('on input')
              }} onBlur={(e) => {
                console.log(editor.current.innerHTML, 'inner html')
                console.log(editor.current.innerText, 'inner text')
                let plainText = editor.current.innerText;
                actions.editNote(note.id, {note_body: text.current, plain_text: editor.current.innerText})
                // actions.saveNote(loc.state.index, text.current, plainText)
              }}>

              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default NoteEditor;
