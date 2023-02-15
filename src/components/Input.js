import React from "react";

import AttachFileIcon from "@mui/icons-material/AttachFile";
import PhotoIcon from "@mui/icons-material/Photo";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type Something ..." />
      <div className="send">
        <AttachFileIcon />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <PhotoIcon />
        </label>
        <button>SEND</button>
      </div>
    </div>
  );
};

export default Input;
