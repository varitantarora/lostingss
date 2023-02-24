import React, { useState ,useEffect} from "react";
import FoundThing from "./FoundThing";
import "./FoundItemsPage.css"

const FoundItemsPage = props =>{
    const [foundItems, setFoundItems]= useState([]);
    useEffect(()=>{
        const fetchFoundItems =  async()=>{
            const response = await fetch ('https://lostandfound-cf220-default-rtdb.firebaseio.com/foundItems.json');
            const responseData = await response.json();
            const loadedFoundItems=[];
            for (const key in responseData){
                loadedFoundItems.push({
                    id:key,
                    name:responseData[key].name,
                    color:responseData[key].color,
                    date: new Date (responseData[key].date),
                    location:responseData[key].location,
                    image:responseData[key].image,    
                })
            }
            setFoundItems(loadedFoundItems);
        };
        fetchFoundItems();
    },[])
    const foundItemsList = foundItems.map((foundItem) => (
        <FoundThing
        onShowContact={props.onShowContact}
          key={foundItem.id}
          id={foundItem.id}
          name={foundItem.name}
          color={foundItem.color}
          location={foundItem.location}
          date={foundItem.date}
          imageSource={foundItem.image}
        />
      ));
    return (
        <React.Fragment>
            <div className="foundItemsContainer">
            
               <ul>{foundItemsList}</ul>                

            </div>
        </React.Fragment>
    )
};
export default FoundItemsPage;