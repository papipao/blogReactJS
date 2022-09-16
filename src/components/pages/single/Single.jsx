import React from "react";
import Sidebar from "../../blog/sidebar/Sidebar";
import SinglePost from "../../blog/singlePost/SinglePost";
import "./single.css";

function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  );
}

export default Single;
