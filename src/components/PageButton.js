import React from 'react';
import './PageButton.css';

const PageButton = ({ planetNumber, handleButton }) => {
    const singleButton = [];


    for(let i=1; i<=Math.ceil(planetNumber/10);i++) {
        const buttonID = () => {
        handleButton(i)
    }
        singleButton.push(<button className='singleButton' key={i} onClick={buttonID}>{`${i}`}</button>)      
    }

    return (
        <div className='container'>
            {singleButton}
        </div> 
    )

}

export default PageButton;