import React from 'react';
import Planet from './Planet';
import './PlanetList.css';


const PlanetList = ({ planetsforchild }) => {
    const planetListComponent = planetsforchild.map((planet, i) => {
        return <Planet
            key = {i}
            name = {planetsforchild[i].name}
            population = {planetsforchild[i].population}
            gravity = {planetsforchild[i].gravity}
            terrain = {planetsforchild[i].terrain}
            residents = {planetsforchild[i].residents}/>
    })
    return (
    <div className='PlanetList'>
        {planetListComponent}
    </div>
    );
}

export default PlanetList;