import React from 'react';

// Helper function to format dates
const formatDate = (date) => new Date(date).toLocaleDateString();
const formatTime = (date) => new Date(date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const EventCard = ({ item }) => {
  const dateStart = new Date(item.date_start);
  const dateEnd = new Date(item.date_end);

  // Check if date_start and date_end are the same day
  const isSameDay = formatDate(dateStart) === formatDate(dateEnd);

  return (
    <div className="item-card">
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <p>
        {isSameDay ? (
          <>
            {formatDate(dateStart)} • {formatTime(dateStart)} - {formatTime(dateEnd)}
          </>
        ) : (
          <>
            {formatDate(dateStart)} {formatTime(dateStart)} - {formatDate(dateEnd)} {formatTime(dateEnd)}
          </>
        )}
      </p>
    </div>
  );
};

export default EventCard;
