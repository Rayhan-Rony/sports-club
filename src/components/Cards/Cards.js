import React, { useEffect, useState } from 'react';
import { FaAccessibleIcon } from "react-icons/fa";

import Details from '../Details/Details';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SingleCard from '../SingleCard/SingleCard';
import Toast from '../Toast/Toast';
import "./Cards.css"

const Cards = () => {
    const [cards, setCards] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])

    const handleTime = (card) => {
        // console.log('clicked')
        const updatedDetails = [...details, card]
        setDetails(updatedDetails)

    }


    return (
        <div>
            <h1> <FaAccessibleIcon></FaAccessibleIcon> Sports-Club</h1>
            <div className='cards-container'>
                <div className='single-card-container'>
                    {
                        cards.map(card => <SingleCard key={card.id} card={card} handleTime={handleTime}></SingleCard>)
                    }
                </div>
                <div className='sidebar'>
                    <PersonalInfo></PersonalInfo>
                    {/* <Break handleBreak={handleBreak}></Break> */}
                    <Details details={details}></Details>
                    <Toast></Toast>
                </div>
            </div>
        </div>
    );
};

export default Cards;