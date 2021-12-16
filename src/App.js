import "./App.css";

import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Locations from "./components/Locations";
import People from "./components/People";
import Movies from "./components/Movies";
import Home from "./components/Home";
import Nav from "./components/Nav";


const App = () => {
  return (
    <div className="app">
          <Nav />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/people" component={People} />
          <Route path="/locations" component={Locations} />
        </Switch>
    </div>
  );
}

//using version 5

export default App;