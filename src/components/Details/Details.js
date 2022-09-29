import React from 'react';

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
            <p>ttt:{props.details.length}</p>
            <h2>Exercise Details:</h2>
            <p>Exercise Time:{totalTime}m</p>
            <p>Break Time:</p>
            <button>Activity Completed</button>
        </div>
    );
};

export default Details;