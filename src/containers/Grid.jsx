import React, { useEffect, useState, useContext, Children } from "react";
import Cell from "../components/Cell";
import "./styles/gridStyle.css";
import NavigationToolBar from "../contexts/navigaionToolBar";
import { navigationF } from "../utils/navigationFunction";

const Grid = ({ width = 30, height = 15, setNavigating, navigating }) => {
  const NavigationToolBarContext = useContext(NavigationToolBar);

  const [cells, setCells] = useState([]);
  const [clickedCell, setClickedCell] = useState({ x: null, y: null });

  const [selectedCells, setSelectedCells] = useState([]);
  const [bestCell, setBestCell] = useState(null);

  useEffect(() => {
    const number = width * height;
    const cellArray = [];
    for (let i = 0; i < number; i++) {
      cellArray.push(i);
    }
    setCells(cellArray);
  }, []);

  useEffect(() => {
    if (navigating) {
      const cells = navigationF(
        NavigationToolBarContext.startCell,
        NavigationToolBarContext.endCell,
        width,
        height,
        NavigationToolBarContext.wallCells,
        setBestCell,
        setNavigating
      );
      setSelectedCells(cells);
    }
  }, [navigating]);

  useEffect(() => {
    console.log("USE Effect best cell", bestCell);
    if (navigating) {
      const cells = navigationF(
        bestCell,
        NavigationToolBarContext.endCell,
        width,
        height,
        NavigationToolBarContext.wallCells,
        setBestCell,
        setNavigating
      );
      setSelectedCells(cells);
      console.log(selectedCells);
    }
  }, [bestCell]);

  useEffect(() => {
    NavigationToolBarContext.handleGridClick(clickedCell);
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
            selectedTool={NavigationToolBarContext.selectedTool}
            selectedCells={selectedCells}
          />
        );
      })}
    </div>
  );
};

export default Grid;
