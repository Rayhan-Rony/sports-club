import React, { useEffect, useState } from 'react';
import './Details.css'

const Details = (props) => {
    const [breakTime, setBreakTime] = useState(0)

    useEffect(() => {
        if (breakTime) {

            localStorage.setItem('break', breakTime)
        }
        else {
            const saveData = localStorage.getItem('break')
            setBreakTime(saveData)
        }
    }, [breakTime])

    const card = props.details;
    let totalTime = 0;
    for (const game of card) {

        totalTime = totalTime + parseFloat(game.time);
    }
    return (
        <div>
            <div>
                <h2>Add A Break</h2>
                <button className='break-btn' onClick={(e) => setBreakTime(e.target.innerText)}   >10s</button>
                <button className='break-btn' onClick={(e) => setBreakTime(e.target.innerText)}>20s</button>
                <button className='break-btn' onClick={(e) => setBreakTime(e.target.innerText)}>30s</button>
                <button className='break-btn' onClick={(e) => setBreakTime(e.target.innerText)}>40s</button>
                <button className='break-btn' onClick={(e) => setBreakTime(e.target.innerText)}>50s</button>
            </div>
            <div>
                <h2>Exercise Details:</h2>
                <p className='total-time' >Exercise Time:<span className='time'>{totalTime}m</span></p>
                <p>Break Time:{breakTime}</p>
            </div>


        </div>
    );
};

export default Details;