import "./sidebar.css";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar--item">
        <span className="sidebar--title">About Me</span>
        <img
          src="https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis est tempora enim natus obcaecati ex nam laborum iste eligendi deleniti nisi,
          nostrum in, esse quos accusantium quaerat ipsa amet aspernatur.
        </p>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--title">Categories</span>
        <ul className="sidebar--list">
          <li className="sidebar--listItem">Life</li>
          <li className="sidebar--listItem">Music</li>
          <li className="sidebar--listItem">Style</li>
          <li className="sidebar--listItem">Sports</li>
          <li className="sidebar--listItem">Tech</li>
        </ul>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--title">Follow Us</span>
        <div className="sidebar--social">
          <span className="sidebar--icon">
            <AiFillFacebook />
          </span>
          <span className="sidebar--icon">
            <AiFillInstagram />
          </span>
          <span className="sidebar--icon">
            <BsPinterest />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
