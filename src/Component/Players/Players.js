import React, { useState } from 'react';
import Card from '../Card/Card';
import fakedata from '../Fakedata';
import SingalPlayer from '../SingalPlayer/SingalPlayer';
import './Players.css';

const Players = () => {
   const [player, setPlayer] = useState (fakedata);
    const [card, setCard] = useState([]);
    

   const handleAddPlayer =() =>{
       
       const newCard =[...card, player];
    setCard(newCard);

   }
    return (
        <div className="players-ontainer">
           
            <div className="player-container">
            
                {
                fakedata.map(players=> <SingalPlayer handleAddPlayer={handleAddPlayer} player={players}></SingalPlayer> )
                }
               
            </div>
            <div className="card-container">
               <Card card={card}></Card>
            </div>
           
            
        </div>
    );
};

export default Players;