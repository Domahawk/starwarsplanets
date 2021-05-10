import React, { Component } from 'react';
import './App.css';
import PlanetList from '../components/PlanetList';
import PageButton from '../components/PageButton';

class App extends Component {

  constructor () {
    super();
    this.state = {
      planets: [],
      numberOfPlanets: 0,
      currentPage: 1,
      prevPage: 0
    };
  }

  getData (i) {
    if(i !== this.state.prevPage){
      fetch('https://swapi.py4e.com/api/planets/?page='+i)
        .then(resp => resp.json())
        .then(data => this.setState({ 
          planets: data.results,
          numberOfPlanets: data.count,
          prevPage: i 
        }))  
    }
}
  
  arrowsHandleButton = (i) => {
    this.setState({ currentPage: this.state.currentPage +(i)});
  }

  handleButton = (i) => {
    this.setState({ currentPage: i })
  }

  componentDidMount () {  
    this.getData(this.state.currentPage);    
  }
  
  componentDidUpdate () {
    this.getData(this.state.currentPage);
  }
  
  render() {
    const { planets, numberOfPlanets, currentPage } = this.state;
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
            <PageButton planetNumber = {numberOfPlanets} 
                        handleButton = {this.handleButton} 
                        arrows = {this.arrowsHandleButton}
                        pageState={currentPage}/>
            <PlanetList planetsforchild = {planets} />
          </div>   
        </div>
      </div>
    );
  }
}
export default App;
