import React from "react";
import "./singlepost.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function SinglePost() {
  return (
    <div className="singlepost">
      <div className="singlepost--wrapper">
        <img
          src="https://images.pexels.com/photos/889930/pexels-photo-889930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="singlepost--img"
        />
        <h1 className="singlepost--title">
          Lorem ipsum dolor sit.
          <div className="singlepost--edit">
            <span className="singlepost--icon">
              <BiEdit />
            </span>
            <span className="singlepost--icon">
              <AiFillDelete />
            </span>
          </div>
        </h1>
        <div className="singlepost--info">
          <span className="singlepost--author">
            Author: <b>Juan D.C.</b>
          </span>
          <span className="singlepost--date">1 hour ago</span>
        </div>
        <p className="singlepost--desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi numquam consequuntur placeat nesciunt expedita, architecto voluptatem
          asperiores impedit cum ipsam. Ullam, sit! Inventore et dolor recusandae repellat repellendus quibusdam perspiciatis. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Repudiandae aperiam corporis similique eum nobis mollitia amet ab tempora, perferendis totam quia
          reprehenderit eveniet, odit dolores hic blanditiis eaque, ea sed inventore cum? Quos quae modi non consequatur recusandae architecto ipsa,
          suscipit soluta provident sint voluptatum illo. Dicta voluptas numquam optio.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
