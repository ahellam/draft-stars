import Navbar from "./Navbar";
import Home from "./Home";
import DraftPlayers from "./DraftPlayers";
import Create from "./Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";


  const URL = "http://localhost:3000/players"

function App() {

  const [players, setPlayers] = useState([])


  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(setPlayers)
  },[])

  function handleAddPlayer () {
    fetch(URL)
    .then(res => res.json())
    .then(setPlayers)
    
    // setPlayers([...players, newPlayer])
  }

  return (
    <Router>
      <div className="App">
        <div className="Nav">
          <Navbar />
        </div>
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/draft">
              <DraftPlayers players={players} />
            </Route>
            <Route path="/create">
              <Create onAddPlayer={handleAddPlayer}/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
