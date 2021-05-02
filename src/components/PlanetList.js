import React from 'react';
import Planet from './Planet';
import './PlanetList.css';


const PlanetList = ({ planetsforchild }) => {
    const planetListComponent = planetsforchild.map((planet, i) => {
        return <Planet
            key = {i}
            name = {planet.name}
            population = {planet.population}
            gravity = {planet.gravity}
            terrain = {planet.terrain}
            residents = {planet.residents}/>
    })
    return (
    <div className='PlanetList'>
        {planetListComponent}
    </div>
    );
}

export default PlanetList;