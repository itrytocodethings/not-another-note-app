import React from "react";
import '../../assets/css/notecard.css'

const NotesCard = ({note}) => {
  return (
    <div className="col-12 col-md-4">
      <div class="card note-card text-center">
        <div class="card-body">
          <h5 class="card-title" contentEditable onBlur={() => console.log('done editing the title')}>{note.title}</h5>
          <p class="card-text">
            {note.body}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
