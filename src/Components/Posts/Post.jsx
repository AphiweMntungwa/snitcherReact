import React from "react";
import styles from "./posts.module.css";

function Post({ element }) {
  return (
    <div className={("card", styles.card)} style={{ borderRadius: "0" }}>
      <p className="card-header description">{element.post}</p>
      <span className={styles.imgSpanIdex}>
        {element.media.map((el) => (
          <img key={el} src={el} alt="" />
        ))}
      </span>
      <h6>{element.created}</h6>
    </div>
  );
}
export default Post;
