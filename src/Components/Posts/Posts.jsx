import React, { useState, useEffect } from "react";
import styles from "./posts.module.css";
import Post from "./Post";
import Box from "../Box/Box";

function Posts() {
  const [items, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8080/index`)
      .then((data) => data.json())
      .then(({ list }) => {
        const posts = [];
        list.forEach((el) => {
          posts.push(el);
        });
        setItem(posts);
      })
      .catch((e) => console.log("ERROR ON FETCH"));
  }, []);

  return (
    <Box boxClass={styles.postList}>
      <ul className={styles.listUl}>
        {items.map((el) => (
          <li className={styles.listItem} key={el._id}>
            <Post element={el} />
          </li>
        ))}
      </ul>
    </Box>
  );
}
export default Posts;
