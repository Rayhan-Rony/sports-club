import React from 'react';
import './Details.css'

const Details = (props) => {
    // console.log(props.details)
    const card = props.details;
    let totalTime = 0;
    for (const game of card) {
        console.log(game)
        totalTime = totalTime + parseFloat(game.time);
    }
    return (
        <div>

            <h2>Exercise Details:</h2>
            <p className='total-time' >Exercise Time:<span className='time'>{totalTime}m</span></p>
            <p>Break Time:</p>

        </div>
    );
};

export default Details;