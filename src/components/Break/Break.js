import React from 'react';

const Break = (props) => {
    return (
        <div>
            <h2>Add A Break</h2>
            <button onClick={props.handleBreak}>10s</button>
            <button onClick={props.handleBreak}>20s</button>
            <button onClick={props.handleBreak}>30s</button>
            <button onClick={props.handleBreak}>40s</button>
            <button onClick={props.handleBreak}>50s</button>
        </div>
    );
};

export default Break;