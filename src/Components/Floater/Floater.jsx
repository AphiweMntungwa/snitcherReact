import React from "react";
import styles from "./floater.module.css";
import { Link } from "react-router-dom";

const Floater = ({ children, linkTo }) => {
  return (
    <div className={styles.floatBox}>
      <button className={styles.crossSpan}>
        <Link to={linkTo}> &#x02A37; </Link>
      </button>
      {children}
    </div>
  );
};

export default Floater;
