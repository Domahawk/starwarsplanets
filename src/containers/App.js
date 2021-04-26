import React, { Component } from 'react';
import './App.css';
import PlanetList from '../components/PlanetList';

class App extends Component {

  constructor () {
    super();
    this.state = {
      planets: [],
      residents: []
    };
  }

  componentDidMount () {
    fetch('https://swapi.py4e.com/api/planets/')
    .then(resp => resp.json())
    .then(data => {this.setState({ planets: data.results })})
  }
  
  render() {
    const { planets } = this.state;
    return (
      <div className='bodyAll'>
        <header className='App-header'>
        This site makes calls to swapi.dev api for data on Star Wars planets.
        </header>
        <div className='intro'>
        <h1 className='introh1'>STAR WARS <br/> PLANETS</h1>     
        </div>  
        <div className='App-MainComponent'>
          <PlanetList planetsforchild = {planets}/>          
        </div> 
      </div>
    )
  }
}
export default App;
