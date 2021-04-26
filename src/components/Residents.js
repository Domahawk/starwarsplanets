import React, { useEffect, useState } from 'react';
import './Residents.css'

const Residents = ({ residents }) => {  
    const [ resident, setResident ] = useState(residents);
        useEffect((resident) =>
            fetch(residents)
            .then(resp => resp.json())
            .then(data => setResident(data.name)), [])
            

    return (
        <p className='Residents'>{ resident }</p>
        
    )
}

export default Residents;