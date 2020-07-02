import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
import Subtitle from "./components/Subtitle";
import Panorama from "./components/Panorama";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Book from './pages/Book'
import MyBook from './pages/MyBook'
import Search from './pages/Search'
import Mybookshelf from './pages/Mybookshelf'
import Openbook from "./components/Openbook";
import Login from "./components/Login"
import Bookfloat from "./components/Bookfloat"
import Signup from "./components/Signup"
import Bookshelf from "./pages/BookShelf";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import {getCurrentUser} from "./utils/API";
import {userContext} from "./utils/appContext";

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=>{
    getCurrentUser().then(({data})=> setUser(data))
  },[])
  return (
    <Router>
      <userContext.Provider value={{user}}>
      <div className="App">
       
        <Switch>
          <Route exact path="/">
      <p>Welcome {user?.email || "Stranger"}!</p>
          </Route>
          <Route exact path="/login">
            <Login/>
            <Bookfloat/>
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>

          <Route exact path="/books">
            <Bookshelf />
          </Route>

          <Route exact path="/books/:title">
            <p>Book ID Route</p>
            <Book/>
          </Route>

          <Route exact path="/openbook">
            <Book/>
          </Route>

          <Route exact path="/mybook">
            <MyBook/>
          </Route>

          <Route exact path="/search">
            <Search/>
          </Route>

          <Route exact path="/mybookshelf">
          <p>My Bookshelf</p>
          <Mybookshelf/>
          </Route>
          <Route exact path="/saved" component={Saved} />           
          <Route component={NoMatch} />
        </Switch>
      </div>
      </userContext.Provider>
    </Router>
  );
}

export default App;
