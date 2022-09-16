import React from "react";
import "./write.css";
import { RiAddFill } from "react-icons/ri";
function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/305821/pexels-photo-305821.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt=""
        className="write--img"
      />
      <form className="write--form">
        <div className="write--formGroup">
          <label htmlFor="fileInput">
            <span className="write--icon">
              <RiAddFill />
            </span>
          </label>
          <input type="file" name="" id="fileInput" className="write--hide" />
          <input type="text" name="" placeholder="Title" className="write--input" autoFocus={true} />
        </div>
        <div className="write--formGroup">
          <textarea placeholder="Tell your story..." className="write--input write--text"></textarea>
        </div>
        <button className="write--submit">Publish</button>
      </form>
    </div>
  );
}

export default Write;
