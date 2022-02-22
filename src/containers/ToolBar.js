import React, { useContext } from "react";
import "./styles/toolBarStyle.css";
import NavigationToolBar from "../contexts/navigaionToolBar";

const ToolBar = () => {
  const NavigationToolBarContext = useContext(NavigationToolBar);
  return (
    <div className="tool-bar">
      <button
        onClick={(e) => {
          NavigationToolBarContext.setSelectedTool("start");
        }}
      >
        Start point
      </button>
      <button
        onClick={(e) => {
          NavigationToolBarContext.setSelectedTool("end");
        }}
      >
        End point
      </button>
      <button
        onClick={(e) => {
          NavigationToolBarContext.setSelectedTool("wall");
        }}
      >
        Wall
      </button>
    </div>
  );
};

export default ToolBar;
