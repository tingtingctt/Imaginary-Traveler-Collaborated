import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Subtitle from "./Subtitle"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Subtitle text={["His cathedral was enough for him.", "It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence.", "The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that.", "It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him.", "He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it.", "If anyone came upon him then he would run away like a lover surprised during a serenade."]}/>
        <Switch>
          <Route exact path="/">
            <p>Default Route</p>
          </Route>
          <Route exact path="/books/:id">
            <p>ID Route</p>
          </Route>
          <Route>
            <p>No Match Route</p>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
