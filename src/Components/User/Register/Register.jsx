import React from "react";
import "./register.css";
// import axios from "axios";

const Register = () => {
  // const nameRef = useRef(null);
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);

  // const register = async (e) => {
  //   e.preventDefault();
  //   await axios.post("/register", {
  //       username: nameRef.current.value,
  //       email: emailRef.current.value,
  //       password: passwordRef.current.value,
  //     })
  //     .then(() => {
  //       console.log('done');
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    <div className="registry col-8">
      <h1
        className="login-header"
        style={{ textAlign: "center", paddingBottom: "8px" }}
      >
        Sign Up
      </h1>
      <form action="/register" className="reg-form" method="post">
        <div className="div-profile">
          <input type="file" name="profileImage" />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="email@email"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <button className="btn btn-success">
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;