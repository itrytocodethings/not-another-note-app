import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/Context";

//styles
import "../../assets/css/notes.css";

// Components
import SideBar from "../Components/Sidebar";
import MainContent from "../Components/MainContent";
import NotesCard from "../Components/NotesCard";

//icons
import { BsFilePlus } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";

export const NoteApp = () => {
  const { store, actions } = useContext(Context);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    setNotes(store.user ? store.user.notes : []);
  },[store.user]);
  return (
    <div className="app-container">
      <div className="content d-flex">
        <SideBar />
        <MainContent>
          <header className="notes-header">
            <div className="notes-header-content py-3 px-3 d-flex justify-content-between">
              <div className="d-flex">
                <button
                  className="btn btn-primary btn-sidebar me-2"
                  onClick={() => {
                    actions.setShowNav(); //show/hide collapsed nav.
                  }}
                >
                  <BiMenu />
                </button>
                <h3>Notes</h3>
              </div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  actions.newNote();
                }}
              >
                <BsFilePlus />
              </button>
            </div>
          </header>
          <div className="notes container-fluid">
            <div className="notes-content">
              <div className="row gx-4 gy-4">
                {notes
                  ? notes.length > 0
                    ? notes
                        .map((note, index) => (
                          <NotesCard key={index} note={note} index={index} />
                        ))
                        .reverse()
                    : "You have no notes"
                  : null}
              </div>
            </div>
          </div>
        </MainContent>
      </div>
    </div>
  );
};
