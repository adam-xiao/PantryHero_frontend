import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';

class App extends Component{
  
  state={
    data: [],
    Search: ""
  }

  handleSearchBar = (term) => {
    fetch(`http://127.0.0.1:3000/search/${term}`)
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  
  render(){

    return (
      <div className="App">
        <h1>Pantry Hero</h1>
        <Search handleSearchBar={this.handleSearchBar}/>
        {this.state.data.map(food => {return <p>{food.brandOwner}</p>})}
      </div>
    );
  }
}

export default App;
