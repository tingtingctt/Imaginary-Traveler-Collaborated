import React, {useState, useEffect, useContext} from 'react';

import MyFlipbook from "../components/MyFlipbook";

import Nav from "../components/Nav";

import {userContext} from "../utils/appContext"

import "../components/BookPainting/bookStyle.css";

import {useLocation} from "react-router-dom";


function MyBook() {
  const {user} = useContext(userContext);
  const [currentBook, setCurrentBook] = useState({});
  useEffect(()=>{
    let title = location.pathname.replace("/mybooks/", "");
    setCurrentBook(user?.books.filter(a=> a.volumeInfo.title === title)[0])
  }, [user])
  let location = useLocation();
  // need to modify this line
  

  const [windowSize, setWindowSize] = useState({
      h: window.innerHeight,
      w: window.innerWidth
  })

  // const [books, setBooks] = useState([])

  useEffect(() => {
    window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})));    
  }, [])



  return (
    <div className="BookPainting">
      {/* <Nav/> */}
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <MyFlipbook book={currentBook} width={windowSize.w*0.7} height={windowSize.h*0.7}/>
      </div>     
    </div>
  
  );
}

export default MyBook;