import React from 'react';
import Halfpano from "../Halfpano";
import FlipChild from "../Flipchild";
import Panorama from '../Panorama';
import FlipPage from 'react-flip-page';
import Subtitle from '../Subtitle';


let books = [];    

const pages = [
  {
    "index": 0,
    "address": "Paris Notre-Dame -- Place Jean-Paul-II, Paris, France",
    "text": "His cathedral was enough for him. It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence. The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that. It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him. He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it. If anyone came upon him then he would run away like a lover surprised during a serenade. The Hunchback of Notre Dame Author: Victor Hugo Year: 1831 Paris Notre-Dame -- Place Jean-Paul-II, Paris, France"
  },
  {
    "index": 1,
    "address": "101 E 19th St, New York, NY 10003, Union Square Cafe",
    "text": "And then, the bar.  Timeless: long, dark mahogany, with stools high enough to make you feel like you were afloat.  The bar had soft music, dim lighting tinkling layers of noise, the bumps of a neighbor’s knee, the reach of someone’s arm by your face to take a glittering martini, the tap of a hostess as she escorted guests behind your back, the blur of plates being passed, the rattle of drinks, the virtuoso performance of bartenders slapping bottles into the back bar while also delivering bread, while also taking an order with the requisite substitutions and complications.  All the best regulars came in and greeted the hostess saying, Any space at the bar tonight? --Sweetbitter"
  },
  {
    "index": 2,
    "address": "Westminster Hall, London, England",
    "text": "So gorgeous was the spectacle on the May morning of 1910 when nine kings rode in the funeral of Edward VII of England that the crowd waiting in hushed and black-clad awe, could not keep back gasps of admiration.  In scarlet and blue and green and purple, three by three the sovereigns rode through the palace gates, with plumed helmets, gold braid, crimson sashes, and jeweled orders flashing in the sun.  After them came five heirs apparent, forty more imperial or royal highnesses, seven queens--four dowager and three regnant --and a scattering of special ambassadors from uncrowned countries.  Together they represented seventy nations in the greatest assemblage of royalty and rank ever gathered in one place and of its kind the last.  The muffled tongue of Big Ben tolled nine by the clock as the cortege left the palace, but on history’s clock it was sunset, and the sun of the old world was setting in a dying blaze of splendor never to be seen again. --The Guns of August"
  },
  {
    "index": 3,
    "address": "Hollywood Blvd and Highland Ave",
    "text": "I got to my fee, tipped my hat to the blonde and went out after him.  He walked west, swinging his cane in a small tight arc just above his right shoe.  He was easy to follow.  His coat was cut from a rather loud piece of horse robe with shoulders so wide that his neck stuck up out of it like a celery stalk and his head wobbled on it as he walked.  We went a block and a half.  At the Highland Avenue traffic signal I pulled up beside him and let him see me… I leaned against a pepper tree in the parkway and waited.  The thunder in the foothills ws rumbling again.  The glare of lightning was reflected on piled-up black clouds off to the south.  A few tentative raindrops splashed down on the sidewalk and made spots as large as nickels.  The air was as still as the air in General Sternwood’s orchid house. --The Big Sleep"
  }
]

class Flipbook extends React.Component {
    constructor(props) {
      super(props);
      
      this.gotoNextPage = this.gotoNextPage.bind(this);
      this.gotoPreviousPage = this.gotoPreviousPage.bind(this);
    }

    state = {
      clicked: false,
      // address: "31 rue saint louis en l'ile, 75004 Paris, France",
      index: 0
    }

    async componentDidMount() {    
      const response = await fetch('/api/books');
      const data = await response.json();
      books = data.filter((book) => book.title === this.props.title);
      this.setState( {address: books[0].location} );
      console.log(this.state);
      console.log("Books", books);

    }
  
    gotoNextPage() {
      this.flipPage.gotoNextPage();

      if (this.state.index < books.length-1){
        let j = this.state.index + 1;
        // this.setState( {address: pages[j].address, index: j } );
        this.setState( {address: books[j].location, index: j } );

      }

      console.log("current index:" + this.state.index)
    }

    gotoPreviousPage() {
        this.flipPage.gotoPreviousPage();

        if (this.state.index > 0){
          let j = this.flipPage.state.page-1;
          this.setState( { index: j } );
        }
  
      }

    handleClick = event => {

      if(this.state.clicked  === false) {
        return this.setState({clicked: true});
      } 
      if(this.state.clicked === true)  {
        return this.setState({clicked: false});
      }
    };
    
    render() {
      return (
        <div>

          <div>
          <div style={{position: "absolute", zIndex: "2", height: window.innerHeight*0.8, width: window.innerWidth*0.4,float:"left"}}>
              <Halfpano address={pages[this.state.index].address}/>
          </div>

          <button onClick={this.handleClick} value={pages[this.state.index].address} style={{position: "absolute", zIndex: "20", left: "50%"}}>FullPano</button>

          <FlipPage style={{position: "relative"}} animationDuration={500} perspective="50em" orientation="horizontal" width={this.props.width} height={this.props.height} disableSwipe={true} ref={(component) => { this.flipPage = component; }} >

            {books.map(page => (
              <FlipChild key={page._id} handleClick={this.handleClick} address={page.location} height={this.props.height} width={this.props.width*0.4}>
                {page.paragraph}
              </FlipChild>
              ))}
            
          </FlipPage>

          <br/>
          <button onClick={this.gotoPreviousPage}>Go to previous page</button>
          <button onClick={this.gotoNextPage}>Go to next page</button>

        </div>

        {this.state.clicked === false ? 
        (<></>)
        : (
        
        <>
          <Panorama style={{zIndex:"3", position: "fixed", top: 0, left: 0}} address={pages[this.state.index].address}/>
          <button style={{zIndex:"100", position: "fixed", top: "1em"}} onClick={this.handleClick}>Go back</button>
          <Subtitle text={(pages[this.state.index].text).split(".")}/>

        </>)
       }); 
      </div>)
    }
  }

  export default Flipbook;