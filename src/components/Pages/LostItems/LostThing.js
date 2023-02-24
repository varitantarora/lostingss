import React from "react";
import Card from '../../UI/Card';

const LostThing = props =>{
    return (
        <Card 
            onShowContact = {props.onShowContact}
            id={props.id}
            name = {props.name}
            color={props.color}
            date = {props.date}
            location={props.location}
            imageSource = {props.imageSource}

        />
            
    )
};

export default LostThing;   