import React from "react";
import "./App.css";
import RegisterFormContainer from "./components/RegisterFormContainer";
import { Route } from "react-router-dom";
import GuestList from "./components/GuestList";
import EventListContainer from "./components/EventsListContainer";

function App() {
  return (
    <div className="App">
      <Route
        path="/event/:id/register"
        exact
        component={RegisterFormContainer}
      />
      <Route path="/event/:id" exact component={GuestList} />
      <Route path="/" exact component={EventListContainer} />
    </div>
  );
}

export default App;
