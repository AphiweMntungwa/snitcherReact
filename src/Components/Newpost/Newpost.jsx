import Box from "../Box/Box";
import axios from "axios";
import "./newpost.css";
import Youtube from "./Youtube";

const Newpost = () => {
  const sendPost = () => {
    let arr = [];
    const text = document.querySelector("textarea").value;
    const checks = document.querySelectorAll("input[type=checkbox]");
    for (const check of checks) {
      check.checked && arr.push(check);
    }
    arr = arr.map((e) => e.value);
    axios.post("/index", {
      text,
      arr,
    });
  };

  return (
    <Box boxClass="new-post">
      <Box boxClass="card create-box">
        <textarea
          className="card-body form-control"
          placeholder="Post..."
        ></textarea>
        <div>
          <button className="btn post-button" onClick={() => sendPost()}>
            Post
          </button>
          <i className="fab fa-youtube"></i>
          <span className="resNum">+0</span>
        </div>
      </Box>
      <Youtube />
    </Box>
  );
};
export default Newpost;
