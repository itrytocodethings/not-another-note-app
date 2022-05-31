//react utils
import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

//icons/styles/assests
import "../../assets/css/notecard.css";
import { HiDotsVertical } from "react-icons/hi";

//store
import { Context } from "../store/Context";


const NotesCard = ({ note, index }) => {
  const { actions } = useContext(Context);
  const cardTitle = useRef(null);
  const [noteTitle, setNoteTitle] = useState(note.title)
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setNoteTitle(e.target.value);
  }

  return (
    <div className="col-12 col-md-4">
      <div className="card note-card text-center">
        <div className="card-body position-relative">
          <div className="dropdown note-card-menu dropstart">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <HiDotsVertical />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <button
                  className="dropdown-item"
                  href="#"
                  //onClick moves to editor view and passes the note the user wants to edit along with the index of the note.
                  onClick={() =>
                    navigate("/editor", { state: { note: note } }) 
                  }
                >
                  Edit
                </button>
              </li>
              <li>
              <button
                  className="dropdown-item"
                  href="#"
                  //onClick moves to editor view and passes the note the user wants to edit along with the index of the note.
                  onClick={() => actions.deleteNote(index)}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
          <input id='title' className="form-control" type="text" maxLength={20} value={noteTitle} onChange={(e)=> {
            handleTitleChange(e);
          }} onBlur={(e) => {
            // edit note title, note body can only be edited in edtior view.
            actions.editNote(note.id, {note_title: noteTitle})
          }}/>
          <p className="card-text">{note.plain_text}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
