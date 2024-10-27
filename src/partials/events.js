 
import React, { useState } from 'react';

//import '../css/events.css';

const Events = ({events}) => {
 

  return (
    console.log(events), 
    <div className='events'>
      <h1> Events </h1>
      {events.map((item, index) => (
          <div key={index} className="item-card">
            <h3>Item {index + 1}</h3>
            <ul>
              {Object.entries(item).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
                </li>
              ))}
            </ul>
          </div>
        ))
      }
    </div>

  );
};

export default Events;