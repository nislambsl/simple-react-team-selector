import React from 'react';

const Card = (props) => {
    const card = props.card;
    let total = card.reduce( (total, player) => total + player.salary, 0)
    

    return (
        <div>
            <h3>Booking Summary</h3>
            <p>Number of Players Booked: {card.length}</p>
            
           
            <p>Total Salary: {total}</p>

        </div>
    );
};

export default Card;