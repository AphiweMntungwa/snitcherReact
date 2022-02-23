import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import Posts from "../Posts";
import { globe } from "../Posts";
import "./comment.css";
import Youtube from "../../Newpost/Youtube";
import { SessionContext } from "../../../App";

function Comments() {
  const [comments, showComments] = useState([]);
  const [count, setCount] = useState(0);
  const [tuber, setTuber] = useState(false);
  const [frame, setFrame] = useState("");
  const [del, deleteMe] = useState(false);
  const session = useContext(SessionContext);

  useEffect(() => {
    axios
      .get(`/index/${globe}/comments`)
      .then((res) => {
        showComments(res.data.comments);
      })
      .catch((e) => {
        console.log("please don't panic", e);
      });
  }, [del]);

  const postComment = (e) => {
    e.preventDefault();
    axios
      .post(`/index/${globe}/comments`, {
        body: document.querySelector(".comment").value,
      })
      .then(() => {
        deleteMe(!del);
      })
      .catch((e) => console.log(`uh oohh don't panic ${e}`));
  };
  const deleteComment = (id) => {
    axios
      .delete(`/index/${globe}/comments/${id}`)
      .then(() => {
        deleteMe(!del);
      })
      .catch((e) => console.log('failed, reason:', e));
  };

  return (
    <div>
      <Posts
        comment
        tube={setTuber}
        tuber={tuber}
        count={count}
        setFrame={setFrame}
      />
      {tuber ? (
        <Youtube fetchMe={setCount} />
      ) : (
        <div className="comment-content">
          <form className="" action="">
            <textarea
              name="comment"
              className="form-control comment"
              placeholder="leave a comment"
            ></textarea>
            <div className="buttons">
              <button className="btn btn-success" onClick={postComment}>
                send
              </button>
              <button className="btn btn-warning">cancel</button>
            </div>
          </form>
          <ul className="d-flex flex-column comment-list">
            {comments &&
              comments.map((el) => (
                <li key={el._id}>
                  <span className="comText">{el.body}</span>
                  {el.author._id == session.user[0]._id && (
                    <box-icon
                      name="trash"
                      onClick={() => deleteComment(el._id)}
                    ></box-icon>
                  )}
                  <div style={{ width: "100%" }}>
                    <i style={{ color: "orangered", fontSize: ".6em" }}>
                      - {el.author.username}
                    </i>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
      {frame.length && (
        <div className="card">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${frame.slice(23, 34)}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Comments;
