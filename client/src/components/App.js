import React from "react";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    // <div className="App">
    //   <Home />
    // </div>
    <Router>
      <Route exact to="/" component={Home} />
      <Route to="/category" />
      <Route to="/id" />
    </Router>
  );
}

export default App;
