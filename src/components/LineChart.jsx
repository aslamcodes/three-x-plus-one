import React, { useState } from "react";
import threexplus1 from "../conjucture/threexplus1";
import styles from "./LineChart.module.css";
import { LineChart, Line, XAxis, Tooltip } from "recharts";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const LineGraph = () => {
  const [value, setValue] = useState(7);
  const data = threexplus1(value);

  return (
    <div className={styles["chart-container"]}>
      <div className={styles["chart-controls"]}>
        <h3>Select a Number</h3>
        <input
          type="number"
          value={value}
          min="4"
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={styles["chart-buttons"]}>
          <button
            disabled={value < 1}
            onClick={(e) => {
              setValue((prev) => prev - +1);
            }}
          >
            <AiOutlineMinus />
          </button>
          <button
            onClick={(e) => {
              setValue((prev) => prev + 1);
            }}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>
      <LineChart
        width={window.screen.width < 768 ? 289 : 700}
        height={300}
        data={data}
      >
        <XAxis dataKey="x" />
        <Line type="monotone" dataKey="x" stroke="#8884d8" />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default LineGraph;
