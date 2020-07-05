import React, {useState, useEffect} from 'react';

import MyFlipbook from "../components/MyFlipbook";

import Nav from "../components/Nav";


import "../components/BookPainting/bookStyle.css";

import {useLocation} from "react-router-dom";


function MyBook() {
  let location = useLocation();
  // need to modify this line
  let title = location.pathname.replace("/mybooks/", "");

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

      <Nav/>

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

        <MyFlipbook title={title} width={windowSize.w*0.7} height={windowSize.h*0.7}/>
        
      </div>     
    </div>
  
  );
}

export default MyBook;