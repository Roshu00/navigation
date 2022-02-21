import React from "react";

const Cell = ({ x, y, setStartCell, startCell }) => {
  return (
    <div
      onClick={() => {
        setStartCell({ x, y });
      }}
      className="cell"
    ></div>
  );
};

export default Cell;
