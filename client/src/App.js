import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Subtitle from "./components/Subtitle";
import Panorama from "./components/Panorama";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from './pages/Book'
import Openbook from "./components/Openbook";

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            <p>Navbar</p>
          </Route>

          <Route exact path="/books">
            <p>Bookshelf Route</p>
            
          </Route>

          <Route exact path="/books/:id">
            <p>Book ID Route</p>
          </Route>

          <Route exact path="/openbook">
            <Openbook/>
            <Book/>
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
