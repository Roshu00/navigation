//Components
import { useState } from "react";
import Grid from "./containers/Grid";
import ToolBar from "./containers/ToolBar";
//Context
import { NavigationToolBarContext } from "./contexts/navigaionToolBar";

function App() {
  const [navigating, setNavigating] = useState(false);
  return (
    <div className="App">
      <NavigationToolBarContext>
        <Grid navigating={navigating} setNavigating={setNavigating} />
        <ToolBar setNavigating={setNavigating} />
      </NavigationToolBarContext>
    </div>
  );
}

export default App;
