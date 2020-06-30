import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Subtitle from "./components/Subtitle";
import Panorama from "./components/Panorama";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from './pages/Book'
import Openbook from "./components/Openbook";
import Bookshelf from "./pages/BookShelf";

function App() {
  return (
    <Router>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
            <p>Navbar</p>
          </Route>

          <Route exact path="/panorama">
          {/* <Panorama   containerElement={<div style={{ height: `400px` }} />}
                      mapElement={<div style={{ height: `100%` }} />}/> */}
            <Panorama address={"Vale of Heath, Hampstead Heath, London, England"}/>
            <Subtitle text={("His cathedral was enough for him. It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence. The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that. It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him. He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it. If anyone came upon him then he would run away like a lover surprised during a serenade.").split(".")}/>
          </Route>

          <Route exact path="/books">
            <Bookshelf />
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
