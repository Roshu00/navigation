import React, { useEffect, useState } from "react";
import Cell from "../components/Cell";
import "./style.css";

const Grid = ({ width = 30, height = 15 }) => {
  const [cells, setCells] = useState([]);
  const [startCell, setStartCell] = useState({ x: null, y: null });

  useEffect(() => {
    const number = width * height;
    const cellArray = [];
    for (let i = 0; i < number; i++) {
      cellArray.push(i);
    }
    setCells(cellArray);
  }, []);

  useEffect(() => {
    console.log(startCell);
  }, [startCell]);
  return (
    <div
      className="grid-container"
      style={{
        gridTemplateColumns: `repeat(${width}, 2rem)`,
        gridTemplateRows: `repeat(${height}, 2rem)`,
      }}
    >
      {cells.map((cell) => {
        const x = cell % width;
        const y = (cell - x) / width;
        return <Cell key={cell} x={x} y={y} setStartCell={setStartCell} />;
      })}
    </div>
  );
};

export default Grid;
