import React, { useEffect, useState } from 'react';
import './Residents.css'

const Residents = ({ residents }) => {  
    const [ resident, setResident ] = useState(residents);
    const [ visibility, setVisibility] = useState('invisible');
    
    useEffect((resident) =>
        fetch(residents)
        .then(resp => resp.json())
        .then(data => setResident(data)), [])

    const showHide = () => {
        if (visibility === 'invisible') {
            setVisibility('visible');
        } else if (visibility === 'visible') {
            setVisibility('invisible'); 
        } else {
            setVisibility('invisible');
        }
    }
        
    return (
        <div className='residentsElement'>
            <div>
               <p className='residents' onClick={showHide}> {resident.name}</p> 
            </div>
            {visibility === 'invisible' && (null)}
            {visibility === 'visible' && (
            <div>
                <div className='residentInfo'>
                    <p>Height: {resident.height}</p>
                    <p>Hair Color: {resident.hair_color}</p>
                    <p>Birth Year: {resident.birth_year}</p>
                    <p>Gender: {resident.gender}</p>
                </div>
            </div>
            )}
        </div>
        
    )
}

export default Residents;