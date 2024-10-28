 
import React, { useState } from 'react';
import EventCard from './eventsCards';

import '../css/events.css';

// Helper function to get current time in Swiss timezone
const getCurrentSwissTime = () => {
  const currentUTC = new Date(); // needs better timezone handling
  return new Date(currentUTC.getTime());
};



const Events = ({events}) => {
  console.log(getCurrentSwissTime())
  const filteredSortedEvents = events
    .filter(event => new Date(event.date_end) > getCurrentSwissTime()) // Only future or ongoing events
    .sort((a, b) => new Date(a.date_start) - new Date(b.date_start)); // Sort by start date


  return (
    console.log(filteredSortedEvents), 
    <div className="events">
      <h1>Events</h1>
      <div className="events-grid">
        {filteredSortedEvents.map((item, index) => (
          <EventCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Events;