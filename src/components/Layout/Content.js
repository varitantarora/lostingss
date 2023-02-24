import "./Content.css";
import Button from "../UI/Button";
import React from "react";
import png3 from "../../media/PngItem_6816525.png";

import Contact from "./Contact";
import LostItemsAtHome from "../Pages/LostItems/LostItemsAtHome";
import FoundItemsAtHome from "../Pages/FoundItems/FoundItemsAtHome";

const Content = (props) => {
  return (
    <React.Fragment>
    <div className="bigContainer">
      <div className="smallContainer1">
      <div className="text-light text-center fs-1">
       Lost your precious things?
        <br />Don't Worry,
        <br/> Lostings is here to help!
      </div>
      <div className="text-center p-2">
        <Button type="button" onClick={props.onShowLostForm} className="m-2">
          Report Lost Item
        </Button>
        <Button type="button" onClick={props.onShowFoundForm} className="m-2">
          Report Found Item
        </Button>
      </div>
      </div>
      <div className="smallContainer2">
        <img className="images" src={png3} alt=''></img>
      </div>
      
    </div>
    <div><LostItemsAtHome items={props.things} onShowContact={props.onShowContact}/>
      </div>
      <div><FoundItemsAtHome items={props.things} onShowContact={props.onShowContact} />
      </div>
    {/* <div>
    <Contact/>
    </div> */}
    
    </React.Fragment>
  );
};
export default Content;
