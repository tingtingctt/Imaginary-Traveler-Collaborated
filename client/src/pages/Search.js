import React, { useState, useEffect } from "react";
// import API from "../../utils/API";

import SearchForm from "../components/SearchForm";
import Halfpano from "../components/Halfpano";



function Search() {
  const [text, setText] = useState("Book Text");
  const [address, setAddress] = useState("Paris Notre-Dame -- Place Jean-Paul-II, Paris, France");



  // useEffect(() => {
  //   if (!search) {
  //     return;
  //   }

  //   API.searchTerms(search)
  //     .then(res => {
  //       if (res.data.length === 0) {
  //         throw new Error("No results found.");
  //       }
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       setTitle(res.data[1][0]);
  //       setUrl(res.data[3][0]);
  //     })
  //     .catch(err => setError(err));
  // }, [search]);

  const handleTextChange = event => {
    setText(event.target.value);
  };


  const handleAddressChange = event => {

    setAddress(event.target.value);
    event.preventDefault();
  };



  return (



    <div>

    <a href={`/mybookshelf`}> 
      <p style={{position: "fixed", top: "1em", right: "1em", color:"black", zIndex: 3}}>My Bookshelf</p>
    </a>

      <div style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: window.innerHeight*0.8, width: window.innerWidth*0.4,float:"right", marginRight: "2em"}}>
        {text}
      </div>
          
      <div style={{margin: "2em", height: window.innerHeight*0.8, width: window.innerWidth*0.4}}>
      <Halfpano address={address}/>  
      </div>   



    <form>
      <div className="form-group">
        <input
          // value={props.search}
          onChange={handleTextChange}
          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Type paragraph here"
          id="term"
        />
      </div>


      <div className="form-group">
            <select class="custom-select" id="pref-input" aria-label="Example select with button addon">
              <option selected>Select Book</option>
              <option value="gasby">The Great Gasby</option>
              <option value="fire">Little Fires Everywhere</option>
            </select>
      </div>

      <div className="form-group">
        <input
          // value={address}
          // onChange={handleAddressChange}

          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search Address here"
          id="term"
        />
      </div>

      <button type="submit" className="btn btn-default">Add Paragraph</button>

      <button onClick={handleAddressChange} className="btn btn-default">Preview Panorama</button>
    </form>



    </div>
  );
}

export default Search;
