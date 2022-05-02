import React from "react";
import "../../assets/css/notecard.css";
import { HiDotsVertical } from "react-icons/hi";

const NotesCard = ({ note, index }) => {
  return (
    <div className="col-12 col-md-4">
      <div class="card note-card text-center">
        <div class="card-body position-relative">
          <div class="dropdown note-card-menu dropstart">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <HiDotsVertical />
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Edit
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Delete
                </a>
              </li>
            </ul>
          </div>
          {/* <div><button className="btn btn-primary note-card-menu"><HiDotsVertical /></button></div> */}
          <h5
            class="card-title"
            contentEditable
            onBlur={() => console.log("done editing the title")}
          >
            {note.title}
          </h5>
          <p class="card-text">{note.body}</p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
