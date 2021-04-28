import React from 'react';
import Residents from './Residents';
import './Planet.css';

const Planet = ({ name, population, gravity, terrain, residents }) => {
  const residentListComponent = residents.map((residents, i) =>
   {
      return <Residents
      key={i}
      residents ={residents}/>
  })

  return (
    <div className='planetAll'>
      <div className='planetBackground'>
        <h1 className='planetName'>{name}</h1>
        <div className='planetItems'>
          <h3>Population:</h3>
          <p>{population}</p>
          <h3>Gravity:</h3>
          <p>{gravity}</p>
          <h3>Terrain:</h3>
          <p>{terrain}</p>
          <h3>Characters from here:</h3>
          <div>{residentListComponent}</div>
        </div>  
    </div>

    </div>
  );
}

export default Planet;