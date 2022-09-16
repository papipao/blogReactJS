import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import { AiFillFacebook, AiFillInstagram, AiOutlineSearch } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
function TopBar() {
  const user = true;
  return (
    <div className="top">
      <div className="top--left">
        <span className="top--icon">
          <AiFillFacebook />
        </span>
        <span className="top--icon">
          <AiFillInstagram />
        </span>
        <span className="top--icon">
          <BsPinterest />
        </span>
      </div>
      <div className="top--center">
        <ul className="top--list">
          <li className="top--list-item">
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li className="top--list-item">About</li>
          <li className="top--list-item">Contact</li>
          <li className="top--list-item">
            <Link to="/write" className="link">
              Write
            </Link>
          </li>
          {user && <li className="top--list-item">LOGOUT</li>}
        </ul>
      </div>
      <div className="top--right">
        {user ? (
          <Link to="/settings">
            <img
              src="https://images.pexels.com/photos/18809/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="top--img"
            />
          </Link>
        ) : (
          <ul className="top--list">
            <li className="top--listItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="top--listItem">
              <Link className="link" to="/register">
                Register
              </Link>
            </li>
          </ul>
        )}
        <span className="top--search">
          <AiOutlineSearch />
        </span>
      </div>
    </div>
  );
}

export default TopBar;
