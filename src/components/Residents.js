import React, { useEffect, useState } from 'react';
import './Residents.css'

const Residents = ({ residents, setID, keyI, stateID }) => {  
    const [ resident, setResident ] = useState(residents);
    
   useEffect(() =>
    fetch(residents)
    .then(resp => resp.json())
    .then(data => setResident(data))
    , [residents]) // [] jako bitno, ako nema [] na kraju useEffect uzrokuje infinite loop
        
    const visibilityHandle = () => {
        if (stateID !== keyI) {
            setID(keyI);
        } else {
            setID('');
        }
    }
//onclick set keyI u parent stateu. 
//ako je keyI različit od stateID vrijednosti ne prikazuj ništa.
//ako se keyI isti kao stateID pokaži podatke
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