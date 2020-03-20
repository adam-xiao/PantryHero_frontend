import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  
  state={
    data: []
  }

  componentDidMount(){
    fetch(`http://localhost:3000/search/pizza`)
    .then(resp => resp.json())
    .then(data => this.setState({ data }))
  }

  // getFoods=()=>{
  //   fetch(`http://127.0.0.1:3000/search/pizza`)
  //     .then(resp => resp.json())
  //     .then(data => this.setState({ data }))

  // this.state.data.map(food => {return <p>{food.dataType}</p>})
  // }


  
  render(){

    return (
      <div className="App">
        <h1>Hi</h1>
        {/* <button type="button" onClick={this.getFoods}>Search</button> */}
        {this.state.data.map(food => {return <p>{food.dataType}</p>})}
      </div>
    );
  }
}

export default App;
