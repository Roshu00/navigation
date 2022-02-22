import React, { useEffect, useState, useContext, Children } from "react";
import Cell from "../components/Cell";
import "./styles/gridStyle.css";
import NavigationToolBar from "../contexts/navigaionToolBar";

const Grid = ({ width = 30, height = 15 }) => {
  const NavigationToolBarContext = useContext(NavigationToolBar);

  const [cells, setCells] = useState([]);
  const [clickedCell, setClickedCell] = useState({ x: null, y: null });

  useEffect(() => {
    const number = width * height;
    const cellArray = [];
    for (let i = 0; i < number; i++) {
      cellArray.push(i);
    }
    setCells(cellArray);
  }, []);

  useEffect(() => {
    NavigationToolBarContext.handleGridClick(clickedCell);
    console.log(clickedCell);
  }, [clickedCell]);
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
        return (
          <Cell
            key={cell}
            x={x}
            y={y}
            setClickedCell={setClickedCell}
            clickedCell={clickedCell}
            startCell={NavigationToolBarContext.startCell}
            endCell={NavigationToolBarContext.endCell}
          />
        );
      })}
    </div>
  );
};

export default Grid;
