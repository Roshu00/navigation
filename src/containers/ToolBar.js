import React, { useContext } from "react";
import "./styles/toolBarStyle.css";
import NavigationToolBar from "../contexts/navigaionToolBar";

const ToolBar = ({ setNavigating }) => {
  const startNavigation = () => {
    setNavigating(true);
  };
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
      <button onClick={() => startNavigation()}>Start navigation</button>
    </div>
  );
};

export default ToolBar;
