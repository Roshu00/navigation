//Components
import Grid from "./containers/Grid";
import ToolBar from "./containers/ToolBar";
//Context
import { NavigationToolBarContext } from "./contexts/navigaionToolBar";

function App() {
  return (
    <div className="App">
      <NavigationToolBarContext>
        <Grid />
        <ToolBar />
      </NavigationToolBarContext>
    </div>
  );
}

export default App;
