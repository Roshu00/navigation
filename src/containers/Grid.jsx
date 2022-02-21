import React, { useEffect, useState } from "react";
import "./style.css";

const Grid = ({ width = 20, height = 20 }) => {
  const [cells, setCells] = useState([1, 2, 3, 4, 5]);

  useEffect(() => {
    const number = width * height;
    const cellArray = [];
    for (let i = 0; i < number; i++) {
      cellArray.push(i);
    }
    setCells(cellArray);
  }, []);
  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${width}, 4em)`,
        gridTemplateRows: `repeat(${height}, 4em)`,
      }}
    >
      {cells.map((cell) => {
        return <div className="cell" key={cell}></div>;
      })}
    </div>
  );
};

export default Grid;
