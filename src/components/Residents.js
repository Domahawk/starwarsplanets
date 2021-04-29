import React, { useEffect, useState } from 'react';
import './Residents.css'

const Residents = ({ residents, setID, keyI, stateID }) => {  
    const [ resident, setResident ] = useState(residents);
    
    useEffect(() =>
        fetch(residents)
        .then(resp => resp.json())
        .then(data => setResident(data))
        )
        
    const visibilityHandle = () => {
        if (stateID !== keyI) {
            setID(keyI);
        }
    }
//onclick set key i ako je key jednak stateu display ako ne prazno
    return (
        <div className='residentsElement'>
            <div>
               <p className='residents' onClick={visibilityHandle}> {resident.name}</p> 
            </div>
            {stateID !== keyI && (null)}
            {stateID === keyI && (
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