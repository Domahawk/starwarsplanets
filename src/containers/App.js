import React, { Component } from 'react';
import './App.css';
import PlanetList from '../components/PlanetList';

class App extends Component {

  constructor () {
    super();
    this.state = {
      planets: []
    };
  }



//let update = previous state concat planets????
  componentDidMount () {  

    for (let i=1; i<=7; i++) {       
      fetch('https://swapi.py4e.com/api/planets/?page='+i)
      .then(resp => resp.json())
      .then(data => this.setState({ planets: this.state.planets.concat(data.results)}))
    }
    
  } 
  
  render() {console.log(this.state.planets)
    const { planets } = this.state;
    return (
      <div className='App'>
        <header className='App-header'>
        This site makes calls to swapi.dev api for data on Star Wars planets.
        </header>
        <div className='bodyAll'>
          <div className='intro'>
            <h1 className='introh1'>STAR WARS <br/> PLANETS</h1>     
          </div>  
          <div className='App-MainComponent'>
            <PlanetList planetsforchild = {planets} />
          </div>   
        </div>
      </div>
    );
  }
}
export default App;
