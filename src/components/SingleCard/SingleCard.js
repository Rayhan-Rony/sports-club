import React from 'react';
import './SingleCard.css'

const SingleCard = (props) => {
    console.log(props)
    const { id, name, time, age, img } = props.card
    return (
        <div className='card-info'>
            <img src={img} alt="" />
            <div className='card-text'>
                <h2>{name}</h2>
                <p>For Age: {age}</p>
                <p>Time Required: {time}m</p>
                <button onClick={() => props.handleTime(props.card)} className='card-btn'>Add To List</button>
            </div>
        </div>

    );
};

export default SingleCard;