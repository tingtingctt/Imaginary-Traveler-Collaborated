

import React from "react";
import "./style.css";
// import { StreetViewPanorama } from "react-google-maps";
import { StreetView } from "react-google-map-street-view";
import {StreetViewPanorama} from "react-google-maps";

function Halfpano(props){

  return (
      <StreetView mapStyle={{height: window.innerHeight*0.8, width: window.innerWidth*0.4}} address={props.address} APIkey="AIzaSyD5QSvqKdaT_p-MglqLosMmhZPbPCE5Wns" streetView zoomLevel={15}/>
      
      // <StreetView latLang ={{lat: 48.8530, lng: 2.3499}} APIkey="AIzaSyD5QSvqKdaT_p-MglqLosMmhZPbPCE5Wns" streetView zoomLevel={15}/>


    // <StreetViewPanorama position={{lat: 48.8530, lng: 2.3499}}/>
  );
}


  export default Halfpano;