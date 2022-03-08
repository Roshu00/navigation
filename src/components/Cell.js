import React, { useEffect, useState } from "react";

const Cell = ({
  x,
  y,
  setClickedCell,
  startCell,
  endCell,
  selectedTool,
  selectedCells,
}) => {
  const [wall, setWall] = useState(false);
  const [selected, setSelected] = useState(false);
  const startStyle = startCell?.x === x && startCell?.y === y ? "start" : "";
  const endStyle = endCell?.x === x && endCell?.y === y ? "end" : "";
  const wallStyle = wall ? "wall" : "";
  const selectedStyle = selected ? "selected" : "";

  useEffect(() => {
    if (selectedCells?.some((cell) => cell.x === x && cell.y === y)) {
      setSelected(true);
    } else {
      setSelected(false);
    }
  }, [selectedCells, startCell]);
  return (
    <div
      x={x}
      y={y}
      onClick={() => {
        setClickedCell({ x, y });
        if (selectedTool === "wall") {
          setWall(!wall);
        } else if (selectedTool === "start" || selectedTool === "end") {
          setWall(false);
        }
      }}
      className={`cell ${endStyle} ${startStyle} ${wallStyle} ${selectedStyle}`}
    ></div>
  );
};

export default Cell;
