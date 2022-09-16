import React from "react";
import Sidebar from "../../blog/sidebar/Sidebar";
import "./settings.css";
import { FaUsers } from "react-icons/fa";

function Settings() {
  return (
    <div className="settings">
      <div className="settings--wrapper">
        <div className="settings--title">
          <span className="settings--updateTitle">Update your account</span>
          <span className="settings--deleteTitle">Delete account</span>
        </div>
        <form className="settings--form">
          <label>Profile Picture</label>
          <div className="settings--profilePic">
            <img src="https://images.pexels.com/photos/1842866/pexels-photo-1842866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <label htmlFor="fileInput">
              <span className="settings--icon">
                <FaUsers />
              </span>
            </label>
            <input type="file" id="fileInput" className="settings--hide" />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Juan" />
          <label>E-mail</label>
          <input type="email" placeholder="juan@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settings--submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
