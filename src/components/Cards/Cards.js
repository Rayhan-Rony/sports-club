import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import "./Cards.css"

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch('sports.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    return (
        <div>
            <h1>Sports-Club</h1>
            <div className='cards-container'>
                <div className='single-card-container'>
                    {
                        cards.map(card => <SingleCard key={card.id} card={card}></SingleCard>)
                    }
                </div>
                <div>
                    <p>ami</p>
                </div>
            </div>
        </div>
    );
};

export default Cards;