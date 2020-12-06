import "./App.css";
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Radar from "./components/Radar";
import Bar from "./components/Bar";
import modules from "./modules";

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [isLoading, setLoading] = useState(false); 
  const [hasError, setError] = useState(false);

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
          <Route path="/radar">
            <Radar 
            modules={modules}
            isLoading={isLoading}
            hasError={hasError}
            numbers={numbers}
            setNumbers={setNumbers}
            />
          </Route>
          <Route path="/bar">
            <Bar 
            modules={modules}
            isLoading={isLoading}
            hasError={hasError}
            />
          </Route>
        </Switch>
      </div>
    </Router>
    <div className="app-container">
        Good luck students!
    </div>
    </div>
  );
}

export default App;
