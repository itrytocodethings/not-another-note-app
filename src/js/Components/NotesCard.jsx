//react utils
import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

//icons/styles/assests
import "../../assets/css/notecard.css";
import { HiDotsVertical } from "react-icons/hi";

//store
import { Context } from "../store/Context";


const NotesCard = ({ note, index }) => {
  const { actions } = useContext(Context);
  const cardTitle = useRef(null);
  const navigate = useNavigate();
  /* 
    function to check length of cardTitle. The card title is not a normal 
    input element, it's a H5 with contentEditable, so there isn't a maxLength attribute. 
  */
  const checkTextLengh = (e) => {
    const max = 12;
    if (cardTitle.current.innerText.length >= max && e.code != "Backspace") {
      e.preventDefault();
    }
  };

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
                    navigate("/editor", { state: { note: note, index: index } }) 
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
          <h5
            className="card-title"
            contentEditable
            ref={cardTitle}
            onKeyDown={(e) => checkTextLengh(e)}
            onBlur={() => {
              actions.editTitle(index, cardTitle.current.innerText); //update title on unFocus
            }}
          >
            {note.title}
          </h5>
          <p className="card-text">{note.plainText}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
