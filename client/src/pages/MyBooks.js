import React from "react";
import "../components/Background/style.css";

function MyBooks(props) {
    // mock API call
    let mybooks = [
        {
            title: "Frankenstein",
            img: "https://interactive.wttw.com/sites/default/files/frankenstein@2x.jpg"
        },
        {
            title: "The Metamorphosis",
            img: "https://i.pinimg.com/originals/5d/0c/7c/5d0c7c6d12c680181c8708dd8849876b.jpg"
        }
    ]


    return (


                <div className="container-fluid">
    
                    <div className="Background">

                        {mybooks[0]?
                        (
                        <div className="Alburquerque">
                        <a href={`mybooks/${mybooks[0].title}`}> 
                            < img src={mybooks[0].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "7vh"}} alt="Alburquerque"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }

                        
                        {mybooks[5]?
                        (
                        <div className="BigSleep">
                        <a href={`mybooks/${mybooks[5].title}`}> 
                            < img src={mybooks[5].img} style={{"width" : "9vw", "height" : "22.5vh", "position": "absolute", "left" : "59vw", "top" : "9vh"}} alt="The Big Sleep"/>
                        </a>
                        </div>
                        ):<></>
                        }


                        {mybooks[10]?
                            (<div className="Dracula">
                                <a href={`mybooks/${mybooks[10].title}`}> 
                                     < img src={mybooks[10].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "8vh"}} alt="Dracula"/>
                                </a>
                            </div> ) :<></>
                        }
                         
                        {mybooks[3]?
                        (<div className="Foucault">
                            <a href={`mybooks/${mybooks[3].title}`}> 
                                < img src={mybooks[3].img} style={{"width" : "9vw", "height" : "26vh", "position": "absolute", "left" : "37vw", "top" : "5vh"}} alt="Foucault's Pendulum"/>
                            </a>
                        </div>) : <></>  
                        }
                                                                                 

                        {mybooks[1]?
                        (
                        <div className="Gatsby">
                            <a href={`mybooks/${mybooks[1].title}`}> 
                                < img src={mybooks[1].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "73vw", "top" : "39vh"}} alt="The Great Gatsby"/>
                            </a>
                        </div>
                        ):<></>
                        }


                        {mybooks[9]?
                        (
                        <div className="Guns">
                        <a href={`mybooks/${mybooks[9].title}`}> 
                            < img src={mybooks[9].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "53vw", "top" : "38.5vh"}} alt="The Guns of August"/>
                        </a>
                        </div>
                        ):<></>
                        }


                        {mybooks[7]?
                        (
                        <div className="Hunchback">
                        {/* animation and settime out, JSX Template Literal not working */}
                        {/* <a href="javascript:setTimeout(()=>{window.location = 'The Hunchback of Notre Dame' },2000);">  */}
                        <a href={`mybooks/${mybooks[7].title}`}> 
                            <img src={mybooks[7].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "10vw", "top" : "39vh"}} alt="The Hunchback of Notre Dame"/>
                        </a>                                              
                        </div> 
                        ):<></>
                        }


                        {mybooks[4]?
                        (
                        <div className="Kingbird">
                        <a href={`mybooks/${mybooks[4].title}`}> 
                            <img src={mybooks[4].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "32vw", "top" : "39vh"}} alt="Kingbird Highway"/>
                        </a>
                        </div> 
                        ):<></>
                        }
                                                            

                        {mybooks[11]?
                        (<div className="Little">
                         <a href={`mybooks/${mybooks[11].title}`}> 
                            <img src={mybooks[11].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "71vh"}} alt="Little Fires Everywhere"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }


                        {mybooks[8]?
                        ( <div className="Play">
                        <a href={`mybooks/${mybooks[8].title}`}> 
                            < img src={mybooks[8].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "59vw", "top" : "71vh"}} alt="Play It As It Lays"/>
                        </a>
                        </div>
                            
                        ):<></>
                        }


                        {mybooks[2]?
                        (
                        <div className="Shaker">
                        <a href={`mybooks/${mybooks[2].title}`}> 
                            < img src={mybooks[2].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "71vh"}} alt="Shaker, Why Don't You Sing?"/>
                        </a>
                        </div> 
                        ):<></>
                        }
 

                        {mybooks[6]?
                        (
                        <div className="Sweet">
                        <a href={`mybooks/${mybooks[6].title}`}> 
                            < img src={mybooks[6].img} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "37vw", "top" : "70.5vh"}} alt="Sweetbitter"/>
                        </a>
                        </div>    
                        ):<></>
                        }
                                                         


                    </div>
                
                </div>                   


    );
};

export default MyBooks;