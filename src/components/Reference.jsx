import React from "react";
import styles from "./Reference.module.css";
import { SiWikipedia } from "react-icons/si";
import { RiArticleLine, RiLinksFill } from "react-icons/ri";
const Reference = () => {
  return (
    <div className={styles.ref}>
      <h3>Videos</h3>
      <div className={styles["iframe-container"]}>
        <iframe
          height="371"
          src="https://www.youtube.com/embed/094y1Z2wpJg"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <h3>Articles & Links</h3>

      <a
        href="https://en.m.wikipedia.org/wiki/Collatz_conjecture"
        target="_blank"
        rel="noreferrer"
      >
        <em>
          <SiWikipedia />
          Wikipedia
        </em>
      </a>

      <a
        href="http://www.cecm.sfu.ca/organics/papers/lagarias/"
        target="_blank"
        rel="noreferrer"
      >
        <em>
          <RiArticleLine />
          CECM Paper
        </em>
      </a>
      <a
        href="https://www.maa.org/programs/maa-awards/writing-awards/the-3x-1-problem-and-its-generalizations"
        target="_blank"
        rel="noreferrer"
      >
        <em>
          <RiLinksFill />
          American Mathematical Monthly Volume 92, 1985, 3 - 23.
        </em>
      </a>
    </div>
  );
};

export default Reference;
