import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    const { id, name, time, age, img } = props.card
    return (
        <div className='card-info'>
            <img src={img} alt="" />
            <div className='card-text'>
                <h2>{name}</h2>
                <p>For Age: {age}</p>
                <p>Time Required: {time}</p>
                <button className='card-btn'>Add To List</button>
            </div>
        </div>

    );
};

export default SingleCard;