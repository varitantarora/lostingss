import React from "react";
import FindDate from "./FindDate";
import "./Card.css";
import Button from "./Button";



const Card = (props) => {
 


  return (
    <div className="column">
      <div className="card">

        <div className="cardImage">
          <img  src={props.imageSource}  />
        </div>
        <div className="cardContent">
          <div className="features">
            <ul>
              <li>
                <span>Item-</span> {props.name}
              </li>
              <li>
                <span>Color-</span> {props.color}
              </li>
              <li>
                <span>Date-</span> <FindDate date={props.date} />{" "}
              </li>
              <li>
                <span>Location-</span> {props.location}
              </li>
            </ul>
          </div>
          {/* <Button >Contact</Button> */}
          <a className="btn" onClick={props.onShowContact}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
