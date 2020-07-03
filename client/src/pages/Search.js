import React, { useState, useEffect } from "react";



import * as API from "../utils/API";

import Halfpano from "../components/Halfpano";



function Search() {
  const [text, setText] = useState("Book Text");
  const [address, setAddress] = useState("Paris Notre-Dame -- Place Jean-Paul-II, Paris, France");
  const [book, setBook] = useState("Frankenstein");
  const [books, setBooks] = useState([]);


  useEffect(() => {
    //Get list of books available to add to
    API.getBooks().then(res => {
      //Remove duplicates (caused by multiple entries for one book)
      const titles = res.data.map(book => book.title);
      const uniques = new Set(titles)
      setBooks([...uniques])
    })
  }, [])

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
    event.preventDefault();
    setAddress(event.target.value);
    console.log(event.target.value);
  };

  const handleBookChange = event => {
    console.log(event.target.value);
    setBook(event.target.value);
  }

  const handleSave = () => {
    console.log("Book", book);
    console.log("Entry", text);
    console.log("Address", address);
    console.log("Books", books);
    //Not working, need POST route for adding entries
    API.saveBook({title: book, location: address, description: text}).then(res => console.log(res));
  }



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
            <select onChange={handleBookChange} className="custom-select" id="pref-input" aria-label="Example select with button addon">
              <option disabled selected>Select Book</option>
              {books.map(book => (
                <option value={book} key={book}>{book}</option>
              ))}
              {/* <option value="gasby">The Great Gasby</option>
              <option value="fire">Little Fires Everywhere</option> */}
            </select>
      </div>

      <div className="form-group">
        <input
          // value={address}
          onChange={handleAddressChange}

          name="term"
          list="term"
          type="text"
          className="form-control"
          placeholder="Search Address here"
          id="term"
        />
      </div>

      <button onClick={handleSave} type="button" className="btn btn-default">Save</button>


      {/* <button type="submit" className="btn btn-default">Add Paragraph</button> */}

      {/* <button value={address} onClick={handleAddressChange} className="btn btn-default">Preview Panorama</button> */}
    </form>



    </div>
  );
}

export default Search;
