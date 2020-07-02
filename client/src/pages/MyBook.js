import React, {useState, useEffect} from 'react';
import Halfpano from "../components/Halfpano";
import MyFlipbook from "../components/MyFlipbook";
import FlipPage from 'react-flip-page';

function MyBook() {
    const [windowSize, setWindowSize] = useState({
        h: window.innerHeight,
        w: window.innerWidth
    })

    useEffect(()=> window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})
    )),[])


  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

      <MyFlipbook width={windowSize.w*0.8} height={windowSize.h*0.8}/>
      
    </div>
  );
}

export default MyBook;