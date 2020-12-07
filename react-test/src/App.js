import "./App.css";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { appContext } from "./components/Context"; 
import Radar from "./components/Radar"
import Bar from "./components/Bar"


function App() {
  const exampleData = [1, 1, 1, 1, 1, 1, 1];

  const [arrayOfNumbers, setArrayOFNumbers] = useState(exampleData);
  
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/radar">
                <button type="button">Radar</button>
              </Link>
            </li>
            <li>
              <Link to="/bar">
                <button type="button">Bar</button>
              </Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <appContext.Provider value={{ arrayOfNumbers, setArrayOFNumbers }}>
            <Route path="/radar">
              <Radar />
            </Route>
            <Route path="/bar">
              <Bar />
            </Route>
          </appContext.Provider>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
