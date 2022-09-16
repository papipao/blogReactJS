import React from "react";
import "./post.css";
function Post() {
  return (
    <div className="post">
      <img
        src="https://images.unsplash.com/photo-1618788372246-79faff0c3742?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
        alt=""
        className="post--img"
      />
      <div className="post--info">
        <div className="post--cats">
          <span className="post--cat">Music</span>
          <span className="post--cat">Life</span>
        </div>
        <span className="post--title">Lorem ipsum dolor sit.</span>
        <hr />
        <span className="post--date">1 hour ago</span>
      </div>
      <p className="post--desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}

export default Post;
