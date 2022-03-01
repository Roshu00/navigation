import React, { useState } from "react";

const Cell = ({ x, y, setClickedCell, startCell, endCell, selectedTool }) => {
  const [wall, setWall] = useState(false);
  const startStyle = startCell?.x === x && startCell?.y === y ? "start" : "";
  const endStyle = endCell?.x === x && endCell?.y === y ? "end" : "";
  const wallStyle = wall ? "wall" : "";
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
      className={`cell ${endStyle} ${startStyle} ${wallStyle}`}
    ></div>
  );
};

export default Cell;
