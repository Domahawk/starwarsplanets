import React from 'react';
import './PageButton.css';

const PageButton = ({ planetNumber, handleButton, arrows, pageState }) => {
    const singleButton = [];

    for(let i=1; i<=Math.ceil(planetNumber/10);i++) {
        const buttonID = () => {
        handleButton(i)
    }   
        if (pageState === i) {
            singleButton.push(<button 
                className= 'currentButton' 
                key={i} onClick={buttonID}>{`${i}`}</button>) 
        } else {
            singleButton.push(<button 
                className='singleButton' 
                key={i} onClick={buttonID}>{`${i}`}</button>)      
        }
    
    }

    const buttonMinus = () => {
        if (pageState <= 1) {
            arrows(0);
        } else {
            arrows(-1); 
        }
    }

    const buttonPlus = () => {
        if (pageState >= 7) {
            arrows(0);
        } else {
            arrows(+1);  
        }
    }

    return (
        <div className='container'>
            <button onClick = {buttonMinus} className='singleButton left'></button>
            {singleButton}
            <button onClick = {buttonPlus} className='singleButton right'></button>
        </div> 
    )

}

export default PageButton;