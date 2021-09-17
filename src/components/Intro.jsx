import React from "react";
import styles from "./Intro.module.css";
const Intro = () => {
  return (
    <>
      <h1 className={styles.title}>The 3x + 1 Conjecture</h1>
      <div className={styles.intro}>
        <em>"Mathematics is not yet ready for such problems."</em>
        <em className={styles["pe"]}>-Paul Erdos</em>
        <em>
          "The 3x+1 problem, also known as the Collatz problem, the Syracuse
          problem, Kakutani's problem, Hasse's algorithm, and Ulam's problem,
          concerns the behavior of the iterates of the function which takes odd
          integers n to 3n+1 and even integers n to n/2. The 3x+1 Conjecture
          asserts that, starting from any positive integer n, repeated iteration
          of this function eventually produces the value 1."
        </em>
      </div>
    </>
  );
};

export default Intro;
