import React, { createContext, useEffect, useState } from "react";

const NavigationToolBar = createContext();

export const NavigationToolBarContext = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [startCell, setStartCell] = useState({ x: null, y: null });
  const [endCell, setEndCell] = useState({ x: null, y: null });
  const [wallCells, setWallCells] = useState([]);
  useEffect(() => {
    console.log(selectedTool);
    console.log("startCell", startCell);
    console.log("endCell", endCell);
    console.log("wallCell", wallCells);
  }, [selectedTool, startCell, endCell, wallCells]);

  const handleGridClick = (cell) => {
    switch (selectedTool) {
      case "start":
        setStartCell(cell);
        break;
      case "end":
        setEndCell(cell);
        break;
      case "wall":
        let joined = wallCells.concat(cell);
        setWallCells(joined);
        break;
    }
  };
  return (
    <NavigationToolBar.Provider
      value={{
        selectedTool,
        setSelectedTool,
        startCell,
        endCell,
        handleGridClick,
      }}
    >
      {children}
    </NavigationToolBar.Provider>
  );
};

export default NavigationToolBar;
