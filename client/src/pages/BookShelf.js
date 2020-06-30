import React from "react";
import alburquerque from "../assets/alburquerque.png";
import bigSleep from "../assets/bigSleep.png";
import dracula from "../assets/dracula.png";
import foucault from "../assets/foucault.png";
import greatGatsby from "../assets/greatGatsby.png";
import guns from "../assets/guns.png";
import hunchback from "../assets/hunchback.png";
import kingbird from "../assets/kingBird.png";
import littleFires from "../assets/littleFires.png";
import play from "../assets/play.png";
import shaker from "../assets/shaker.png";
import sweetbitter from "../assets/sweetbitter.png";
import Background from "../components/Background";
import Wrapper from "../components/Wrapper"
import Row from "../components/Row"
import "../components/Background/style.css";

function BookShelf(props) {

    return (
        // <Wrapper>

                <div className="container-fluid">
    
                    {/* <Row> */}
                    <div className="Background">
                        <div className="Alburquerque">
                            < img src={alburquerque} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "7vh"}} alt="Alburquerque"/>
                        </div>
                        <div className="BigSleep">
                            < img src={bigSleep} style={{"width" : "9vw", "height" : "22.5vh", "position": "absolute", "left" : "59vw", "top" : "9vh"}} alt="The Big Sleep"/>
                        </div>
                        <div className="Dracula">
                            < img src={dracula} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "8vh"}} alt="Dracula"/>
                        </div>  
                        <div className="Foucault">
                            < img src={foucault} style={{"width" : "9vw", "height" : "26vh", "position": "absolute", "left" : "37vw", "top" : "5vh"}} alt="Foucault's Pendulum"/>
                        </div>                                                             
                    {/* </Row> */}
                    {/* <Row> */}
                        <div className="Gatsby">
                            < img src={greatGatsby} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "73vw", "top" : "39vh"}} alt="The Great Gatsby"/>
                        </div>
                        <div className="Guns">
                            < img src={guns} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "53vw", "top" : "38.5vh"}} alt="The Guns of August"/>
                        </div>
                        <div className="Hunchback">
                            < img src={hunchback} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "10vw", "top" : "39vh"}} alt="The Hunchback of Notre Dame"/>
                        </div>  
                        <div className="Kingbird">
                            < img src={kingbird} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "32vw", "top" : "39vh"}} alt="Kingbird Highway"/>
                        </div>                                                             
                    {/* </Row> */}
                    {/* <Row> */}
                        <div className="Little">
                            < img src={littleFires} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "81vw", "top" : "71vh"}} alt="Little Fires Everywhere"/>
                        </div>
                        <div className="Play">
                            < img src={play} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "59vw", "top" : "71vh"}} alt="Play It As It Lays"/>
                        </div>
                        <div className="Shaker">
                            < img src={shaker} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "17vw", "top" : "71vh"}} alt="Shaker, Why Don't You Sing?"/>
                        </div>  
                        <div className="Sweet">
                            < img src={sweetbitter} style={{"width" : "9vw", "height" : "24vh", "position": "absolute", "left" : "37vw", "top" : "70.5vh"}} alt="Sweetbitter"/>
                        </div>                                                             
                    {/* </Row> */}

                    </div>
                
                </div>                   

        // </Wrapper>
    );
};

export default BookShelf;