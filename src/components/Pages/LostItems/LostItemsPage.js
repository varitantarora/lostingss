import React, { useState ,useEffect} from "react";
import LostThing from "./LostThing";
import './LostItemsPage.css';

const LostItemsPage = props =>{
    const [lostItems, setLostItems]= useState([]);
    useEffect(()=>{
        const fetchLostItems =  async()=>{
            const response = await fetch ('https://lostandfound-cf220-default-rtdb.firebaseio.com/lostItems.json');
            const responseData = await response.json();
            const loadedLostItems=[];
            for (const key in responseData){
                loadedLostItems.push({
                    id:key,
                    name:responseData[key].name,
                    color:responseData[key].color,
                    date: new Date (responseData[key].date),
                    location:responseData[key].location,
                    image:responseData[key].image,    
                })
            }
            setLostItems(loadedLostItems);
        };
        fetchLostItems();
    },[])
    const lostItemsList = lostItems.map((lostItem) => (
        <LostThing
        onClose={props.onClose}
        onShowContact={props.onShowContact}
          key={lostItem.id}
          id={lostItem.id}
          name={lostItem.name}
          color={lostItem.color}
          location={lostItem.location}
          date={lostItem.date}
          imageSource={lostItem.image}
        />
      ));
    
    return (
        <React.Fragment>
            <div className="lostItemsContainer">
                <ul>{lostItemsList}</ul>
            </div>
        </React.Fragment>
    )
};
export default LostItemsPage;