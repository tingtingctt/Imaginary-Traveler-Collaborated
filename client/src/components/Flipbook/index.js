import React, {useState, useEffect} from 'react';
import Halfpano from "../Halfpano";
import FlipPage from 'react-flip-page';

class Flipbook extends React.Component {
    constructor(props) {
      super(props);
      
      this.gotoNextPage = this.gotoNextPage.bind(this);
      this.gotoPreviousPage = this.gotoPreviousPage.bind(this);
    }
  
    gotoNextPage() {
      this.flipPage.gotoNextPage();
    }

    gotoPreviousPage() {
        this.flipPage.gotoPreviousPage();
      }
    
    render() {
      return (
        <div>
          <FlipPage animationDuration={1000} perspective="50em" orientation="horizontal" width={this.props.width} height={this.props.height} disableSwipe={true} ref={(component) => { this.flipPage = component; }} >
          <div>
                <div style={{height: this.props.height, width: this.props.width/2,float:"left"}}>
                    <Halfpano address="31 rue saint louis en l'ile, 75004 Paris, France"/>
                </div>

                {/* <img src="http://unsplash.it/320/485" style={{height: this.props.height, width: this.props.width/2,float:"right"}}/> */}
                
                <p style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: this.props.height, width: this.props.width*0.4,float:"right"}}>
                His cathedral was enough for him. It was peopled with marble figures of kings, saints and bishops who at least did not laugh in his face and looked at him with only tranquillity and benevolence. The other statues, those of monsters and demons, had no hatred for him – he resembled them too closely for that. It was rather the rest of mankind that they jeered at. The saints were his friends and blessed him; the monsters were his friends and kept watch over him. He would sometimes spend whole hours crouched before one of the statues in solitary conversation with it. If anyone came upon him then he would run away like a lover surprised during a serenade.
                <br/>
                <br/>
                The Hunchback of Notre Dame
                Author: Victor Hugo
                Year: 1831
                Paris Notre-Dame -- Place Jean-Paul-II, Paris, France
                </p>
            </div>

            <div>
                {/* <img src="http://unsplash.it/320/485" style={{height: this.props.height, width: this.props.width/2,float:"right"}}/> */}
        
                <div style={{height: this.props.height, width: this.props.width/2,float:"left"}}>
                    <Halfpano address="Golden Gate Bridge, San Francisco, CA"/>
                </div>


                <p style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: this.props.height, width: this.props.width*0.4, float:"right"}}>
                “Mia found an apartment, a room for rent in the Sunset in a house whose plaster was the color of sea salt, with a stern and elderly landlady who eyed her stomach and asked only, “There going to be an angry husband knocking on my door in a week?” For the last three months of her pregnancy, Mia walked the city, circling the lagoon in Golden Gate Park, climbing Coit Tower, one day crossing the Golden Gate Bridge in a fog so dense she could hear, but not see, the traffic rushing alongside her.  The fog mirrored her state of mind so perfectly she felt as if she were walking through her own brain: a haze of formless, pervasive emotion, nothing she could grasp, but full of looming thoughts that appeared from nowhere, startling her, then receded into whiteness again before she was even sure what she had seen.”
                <br/>
                <br/>
                Little Fires Everywhere
                Author: Celeste Ng
                Year: 2017
                Location: Golden Gate Bridge, San Francisco, CA

                </p>
            </div>

            <div>
                <div style={{height: this.props.height, width: this.props.width/2,float:"left"}}>
                    <Halfpano address="1 Gatsby Lane, Great Neck NY"/>
                </div>

                <p style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: this.props.height, width: this.props.width*0.4,float:"right"}}>
                “It was dawn now on Long Island and we went about opening the rest of the windows downstairs, filling the house with grey turning, gold tuning light.  The shadow of a tree fell abruptly across the dew and ghostly birds began to sing among the blue leaves.  There was a slow pleasant movement in the air, scarcely a wind, promising a cool lovely day. 
                <br/>
                <br/>
                “I don’t think she ever loved him.”  Gatsby turned around from the window and looked at me challengingly.”
                <br/>
                <br/>
                The Great Gatsby
                Author: F. Scott Fitzgerald
                Year: 1925
                1 Gatsby Lane, Great Neck NY
                </p>
            </div>

            <div>
                
                <div style={{height: this.props.height, width: this.props.width/2,float:"left"}}>
                    <Halfpano address="Hampstead Heath, Hampstead, London NW5 1QR, United Kingdom"/>
                </div>


                <p style={{lineHeight:"200%", display: 'flex',  justifyContent:'center', alignItems:'center', height: this.props.height, width: this.props.width*0.4,float:"right"}}>
                “THE WESTMINSTER GAZETTE, 25 SEPTEMBER A HAMPSTEAD MYSTERY
		        The neighborhood of Hampstead is just at present exercised with a series of events which seem to run on lines parallel to those of what was known to the writers of headlines as “The Kensington Horror”, or “The Stabbing Woman”, or “The Woman in Black”.  During the past two or three days several cases have occurred of young children straying from home or neglecting to return from their playing on the Heath.  In all these cases the children were too young to give any properly intelligible account of themselves, but the consensus of their excuses is that they had been with a “bloofer lady”...There is, however, possibly a serious side to the question, for some of the children, indeed all who have been missed at night, have been slightly torn or wounded in the throat.”
                <br/>
                <br/>

                Dracula
                Author: Bram Stoker
                Year: 1897
                Vale of Heath, Hampstead Heath, London, England

                </p>
            </div>


            
          </FlipPage>

          <br/>
          <button onClick={this.gotoPreviousPage}>Go to previous page</button>
          <button onClick={this.gotoNextPage}>Go to next page</button>

        </div>
      );
    }
  }

  export default Flipbook;
