// https://gist.github.com/darenju/355f2c276e5f64fd1c81b02952609be5

import React, {useState, useEffect} from 'react';
import Halfpano from "../components/Halfpano";
import Flipbook from "../components/Flipbook";
import FlipPage from 'react-flip-page';
import {useLocation} from "react-router-dom";


function Book() {
  let location = useLocation();
  let title = location.pathname.replace("/books/", "");

  const [windowSize, setWindowSize] = useState({
      h: window.innerHeight,
      w: window.innerWidth
  })

  // const [books, setBooks] = useState([])

  useEffect(() => {
    window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})));    
  }, [])



  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

      <Flipbook title={title} width={windowSize.w*0.8} height={windowSize.h*0.8}/>
      
    </div>
  );
}

export default Book;