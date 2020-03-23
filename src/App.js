import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import FoodCard from './components/FoodCard';
import { NavLink } from 'react-router-dom';

class App extends Component {

  state = {
    data: [],
    Search: "",
    currentIng: ""
  }

  handleSearchBar = (term) => {
    fetch(`http://127.0.0.1:3000/product/search/${term}`)
      .then(resp => resp.json())
      .then(data => this.parseData(data))
  }



  parseData = (arr) => {
    this.setState({
      currentIng: {
        id: arr[0].ndb_no,
        food_name: arr[0].food_name,
        nf_calories: arr[0].nf_calories,
        nf_cholesterol: arr[0].nf_cholesterol,
        nf_dietary_fiber: arr[0].nf_dietary_fiber,
        nf_p: arr[0].nf_p,
        nf_potassium: arr[0].nf_potassium,
        nf_protein: arr[0].nf_protein,
        nf_saturated_fat: arr[0].nf_saturated_fat,
        nf_sodium: arr[0].nf_sodium,
        nf_sugars: arr[0].nf_sugars,
        nf_total_carbohydrate: arr[0].nf_total_carbohydrate,
        nf_total_fat: arr[0].nf_total_fat,
        img_url: arr[0].photo.highres
      }
    })
  }


  

  render() {

    return (
      <div className="App">
        <h1>Pantry Hero</h1>
        <Search handleSearchBar={this.handleSearchBar} />
        {this.state.currentIng && <FoodCard food={this.state.currentIng} />}
      </div>
    );
  }
}

export default App;
