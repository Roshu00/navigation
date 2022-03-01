import React, { createContext, useEffect, useState } from "react";

const NavigationToolBar = createContext();

export const NavigationToolBarContext = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [startCell, setStartCell] = useState({ x: null, y: null });
  const [endCell, setEndCell] = useState({ x: null, y: null });
  const [wallCells, setWallCells] = useState([]);
  useEffect(() => {}, [selectedTool, startCell, endCell, wallCells]);

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
        wallCells,
      }}
    >
      {children}
    </NavigationToolBar.Provider>
  );
};

export default NavigationToolBar;
