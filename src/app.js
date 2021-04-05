import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import DashBoard from './Components/DashBoard/DashBoard'
import './App.css'
const App = () => { 
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/(tag)?/:tag?" component={DashBoard} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;