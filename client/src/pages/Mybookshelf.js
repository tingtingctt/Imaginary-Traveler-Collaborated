// https://gist.github.com/darenju/355f2c276e5f64fd1c81b02952609be5

// import React, {useState, useEffect} from 'react';


// function Book() {
//     const [windowSize, setWindowSize] = useState({
//         h: window.innerHeight,
//         w: window.innerWidth
//     })

//     useEffect(()=> window.addEventListener("resize", ()=>(console.log("IM CHANGING!"), setWindowSize({h:window.innerHeight,w:window.innerWidth})
//     )),[])


//   return (
//     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>

//       <Flipbook width={windowSize.w*0.8} height={windowSize.h*0.8}/>
      
//     </div>
//   );
// }

// export default Book;