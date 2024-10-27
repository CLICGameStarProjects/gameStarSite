 
import React, { useState } from 'react';

import '../css/home.css';
import Events from'../partials/events.js';

const Home = ({events}) => {
 

  return (
    <div className='home'>
      <h1>Home</h1>
        <p>
            Game* (lire « Game Star ») est une commission associative de la CLIC visant à faire découvrir les nombreux aspects du jeu vidéo sur le campus UNIL-EPFL, particulièrement ses aspects
        </p>
        
        <Events events={events} />
    </div>

  );
};

export default Home;
