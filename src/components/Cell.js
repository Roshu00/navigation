import React from "react";

const Cell = ({ x, y, setClickedCell, startCell, endCell }) => {
  const startStyle = startCell?.x === x && startCell?.y === y ? "start" : "";
  const endStyle = endCell?.x === x && endCell?.y === y ? "end" : "";
  return (
    <div
      x={x}
      y={y}
      onClick={() => {
        setClickedCell({ x, y });
      }}
      className={`cell ${endStyle} ${startStyle}`}
    ></div>
  );
};

export default Cell;
