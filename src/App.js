import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import NavigBar from './components/NavigBar'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  state = {
    products: [],
    Search: ""
  }

  handleSearchBar = (term) => {
    fetch(`http://127.0.0.1:3000/product/search/${term}`).catch((error) => console.error(error))
      .then(resp => resp.json())
      .then(products => this.setState({ products }))
  }


  render() {

    return (
      <div className="App">
        <h1>Pantry Hero</h1>

        <NavigBar handleSearchBar={this.handleSearchBar}/>

        {/* <Search handleSearchBar={this.handleSearchBar} /> */}

        {this.state.products.map(food => (
          <div key={food.food_name}>
            <h1>{food.food_name}</h1>
            <img src={food.photo.highres} />
                <div> Calories: {food.nf_calories && food.nf_calories} </div>
                <div> Cholesterol: {food.nf_cholesterol && food.nf_cholesterol} </div>
                <div> Dietary Fiber: {food.nf_dietary_fiber && food.nf_dietary_fiber} </div>
                <div> P: {food.nf_p && food.nf_p} </div>
                <div> Potassium: {food.nf_potassium && food.nf_potassium} </div>
                <div> Protien: {food.nf_protein && food.nf_protein} </div>
                <div> Saturated Fat: {food.nf_saturated_fat && food.nf_saturated_fat} </div>
                <div> Sodium: {food.nf_sodium && food.nf_sodium} </div>
                <div> Sugar: {food.nf_sugars && food.nf_sugars} </div>
                <div> Carbohydrates: {food.nf_total_carbohydrate && food.nf_total_carbohydrate} </div>
                <div> Total Fat: {food.nf_total_fat && food.nf_total_fat} </div>
                
            <button>Add to Pantry</button>
          </div>
        )
        )}

        {/* {this.state.products.map(food => (
          <div key={food.id}>
            <p>{food.title}</p>
            <img src={food.image} />
          </div>
        )
        )} */}
      </div>
    );
  }x
}

export default App;
