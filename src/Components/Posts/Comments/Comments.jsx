import axios from "axios";
import React, { useEffect, useState } from "react";
import Posts from "../Posts";

function Comments() {
  const [comments, showComments] = useState({});

  useEffect(() => {
    axios
      .get("/index/:id/comments")
      .then((res) => {
        console.log("yay theres a res for you", res);

        showComments(res);
      })
      .catch((e) => {
        console.log("please don't panic", e);
      });
  }, []);

  return (
    <div>
      <h4>comments section baby</h4>
      <Posts comment />
    </div>
  );
}

export default Comments;
