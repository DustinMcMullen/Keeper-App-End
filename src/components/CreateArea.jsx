import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [zoomIn, setZoomIn] = useState(false);
  const [inputHeight, setInputHeight] = useState("1");

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function zoomAnimation() {
    setZoomIn(true);
    setInputHeight("3");
  }

  return (
    <div>
      <form className="create-note">
        {zoomIn && (
          <Zoom in={zoomIn}>
            <input
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              onClick={zoomAnimation}
            />
          </Zoom>
        )}
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={inputHeight}
          onClick={zoomAnimation}
        />
        <Zoom in={zoomIn}>
          <Fab onClick={submitNote}>Add</Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
