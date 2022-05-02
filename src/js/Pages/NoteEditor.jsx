import React, {useState, useRef, useEffect} from "react";
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";

import "../../assets/css/editor.css";
import { IoArrowBack } from "react-icons/io5";
import { BsEye, BsEyeSlash, BsInfoCircle } from "react-icons/bs";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { Link } from "react-router-dom";

const NoteEditor = () => {
  const editor = useRef(null);
  const [text, setText] = useState('');

  useEffect(() => {
    // editor.current.innerHTML = `<b>hello</b> world`
  })

  console.dir(editor.current);
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
              <div className="editor px-2" contentEditable ref={editor} onInput={() => setText(editor.current.innerHTML)}>
              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};

export default NoteEditor;
