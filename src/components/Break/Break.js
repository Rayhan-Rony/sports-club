import React from 'react';
import './Break.css'

const Break = (props) => {
    return (
        <div>
            <h2>Add A Break</h2>
            <button className='break-btn' onClick={props.handleBreak}>10s</button>
            <button className='break-btn' onClick={props.handleBreak}>20s</button>
            <button className='break-btn' onClick={props.handleBreak}>30s</button>
            <button className='break-btn' onClick={props.handleBreak}>40s</button>
            <button className='break-btn' onClick={props.handleBreak}>50s</button>
        </div>
    );
};

export default Break;