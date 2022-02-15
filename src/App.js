import React, {Component} from 'react'
import './App.css';
import 'bulma/css/bulma.css'
import {Title} from './components/Title'
import {SearchFrom} from './components/SearchForm'
import {Movie} from './components/Movie'

class App extends Component() {
  state = {Results : []  }

_handleResults = (results) =>{
  this.setState({results}) 

}
_renderResults(){
  const {results} = this.state
  return results.map(movie =>{
    return(
    <Movie>
      key = {movie.imdbID}
      title = {movie.title}
      year = {movie.year}
      poster = {movie.poster}
    </Movie>
    )
  })
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
        : this._handleResults()
        }

      </div>
    );
  }
 
}

export default App;
