// https://gist.github.com/darenju/355f2c276e5f64fd1c81b02952609be5

import React, {useState, useEffect} from 'react';
import Halfpano from "../components/Halfpano";
import Flipbook from "../components/Flipbook";
import FlipPage from 'react-flip-page';
import "../components/BookPainting/bookStyle.css";


function Book() {
    const [windowSize, setWindowSize] = useState({
        h: window.innerHeight,
        w: window.innerWidth
    })

    useEffect(()=> window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})
    )),[])


  return (
    <div className="BookPainting">

      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

        <Flipbook width={windowSize.w*0.7} height={windowSize.h*0.7}/>
        
      </div>
    </div>
  
  );
}

export default Book;