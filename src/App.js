import React, {Component} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import {Title} from './components/Title'
import {SearchForm} from './components/SearchForm'
import {MoviesList} from './components/MoviesList'

import {Detail} from './pages/Detail'

class App extends Component() {
  state = {Results : false, results :[]  }

_handleResults = (results) =>{
  this.setState({results, usedSearch: true}) 

}


  render() {
    return ( 
      <div className="App">
        <Title>search movies</Title>
        <div className = ' SearchForm-wrapper'>
        <SearchForm onResults = { this._handleResults}/>
        </div>
        {this.state.results.length === 0
        ?<p>Sin reusltados</p>
        : <MoviesList movies  = {this.state.results}/>
        }

      </div>
    );
      }
  } 
 


export default App;
