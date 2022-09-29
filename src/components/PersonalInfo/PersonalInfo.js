import React from 'react';
import './PersonalInfo.css'

const PersonalInfo = () => {
    return (
        <div>

            <h2>Jobayer Ahmed Rony</h2>
            <p>Practicing Front End</p>
            <p><small>Pupil Of Programming Hero</small></p>
            <h3>Learned Item</h3>
            <div className='learned'>
                <p className='text'>HTML</p>
                <p className='text'>CSS</p>
                <p className='text'>JAVASCRIPT</p>

            </div>

        </div>
    );
};

export default PersonalInfo;