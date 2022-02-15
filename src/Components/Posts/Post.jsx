import React, { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./posts.module.css";
import "./posts.css";

function Post({ element, setId }) {

  return (
    <div className={("card", styles.card)} style={{ borderRadius: "0" }}>
      <p className="card-body description">{element.post}</p>
      <span className={styles.imgSpanIdex}>
        {element.media.map((el) => (
          <img key={el} src={el} alt="" />
        ))}
      </span>
      <div className="card-header comment-icons">
        <Link to="/comments">
          <box-icon
            name="message-rounded-add"
            id={element._id}
            onClick={setId}
            className="boxes"
          ></box-icon>
        </Link>
        <box-icon name="trash"></box-icon>
      </div>
      <h6 className="card-footer d-flex justify-content-evenly">
        <span>{element.created.substring(0, 10)}</span>
        <span>{element.author.username}</span>
      </h6>
    </div>
  );
}
export default Post;
