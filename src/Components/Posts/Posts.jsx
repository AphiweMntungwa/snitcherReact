import React, { useState, useEffect } from "react";
import styles from "./posts.module.css";
import Post from "./Post";
import Box from "../Box/Box";
import axios from "axios";
let arr = "";

function Posts(props) {
  const [items, setItem] = useState([]);

  const setId = (e) => {
    arr = e.target.id;
    return e.target.id;
  };

  useEffect(() => {
    axios(`/index`)
      .then((response) => {
        const { list } = response.data;
        const posts = [];
        list.forEach((el, i) => {
          posts.push(el);
        });
        setItem(posts);
      })
      .catch((e) => console.log("ERROR ON FETCH"));
  }, []);

  const show = (
    <Box boxClass={styles.postList}>
      <ul className={styles.listUl}>
        {(props.comment ? items.filter((el) => el._id === arr) : items).map(
          (el) => (
            <li className={styles.listItem} key={el._id}>
              <Post element={el} setId={setId} />
            </li>
          )
        )}
      </ul>
    </Box>
  );

  return show;
}
export default Posts;
