import './App.css';
import React, { Component } from 'react'
import Pokecard from './Pokecard';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard
          id={4}
          name="Charmandar"
          type="fire"
          exp={62}
        />
      </div>
    )
  }
}


export default App;
