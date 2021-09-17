import React from "react";
import styles from "./Credit.module.css";
import { FiTwitter } from "react-icons/fi";
const Credit = () => {
  return (
    <em className={styles.credit}>
      <small>
        <em>
          "Goal of this project is to replicate all possible visualizations
          shown in the video"
        </em>
      </small>
      Made with 💜 by Aslam
      <a href="https://twitter.com/aslamcodes" target="_blank" rel="noreferrer">
        <FiTwitter />
      </a>
    </em>
  );
};

export default Credit;
