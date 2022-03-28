import Navbar from "./Navbar";
import Home from "./Home";
import DraftPlayers from "./DraftPlayers";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/draft">
            <DraftPlayers />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
