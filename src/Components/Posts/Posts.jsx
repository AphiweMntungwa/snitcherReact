import React, { useState, useEffect } from "react";
import styles from "./posts.module.css";
import Post from "./Post";
import Box from "../Box/Box";
import axios from "axios";

let arr = "";
export let globe = arr;

function Posts(props) {
  const [items, setItem] = useState([]);

  arr = localStorage.getItem("array");

  const setId = (e) => {
    arr = e.target.id;
    if (typeof Storage !== "undefined") {
      localStorage.setItem("array", arr);
    } else {
      console.log(`Sorry! No Web Storage support`);
    }
    globe = arr;
    return e.target.id;
  };

  const deletePost = (id) => {
    console.log(`/index/${id}`);
    axios
      .delete(`/index/${id}`)
      .then((res) => {
        console.log(res);
        setItem(res.data.list);
      })
      .catch((e) => console.log("oh boy", e));
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
              <Post
                element={el}
                setId={setId}
                comment={props.comment}
                deletePost={deletePost}
                tube={props.tube}
                tuber={props.tuber}
                count={props.count}
                setFrame={props.setFrame}
                setItem={setItem}
              />
            </li>
          )
        )}
      </ul>
    </Box>
  );

  return show;
}
export default Posts;
