import React from 'react';


const FindDate = (props) => {
    const month = props.date?.toLocaleString("en-US", { month: "long" });
    const day = props.date?.toLocaleString("en-US", { day: "2-digit" });
    const year = props.date?.getFullYear();
  
    return (
      <span>
        <span>{day}</span> <span>{month}</span> <span>{year}</span>        
      </span>
    );
};

export default FindDate;