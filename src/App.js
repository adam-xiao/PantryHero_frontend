import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import NavigBar from './components/NavigBar'
import Home from './containers/Home'
import FoodCard from './components/FoodCard';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'
import Pantry from './containers/Pantry'


class App extends Component {

  state = {
    data: [],
    Search: "",
    currentIng: "",
    pantry: [],
    currentUser: {username:"", id: null}
  }



  componentDidMount() {
        const token = localStorage.token
    
        if(token){
          //get user info
    
          fetch("http://localhost:3000/auto_login", {
            headers: {
              "Authorization": token
            }
          })
          .then(res => res.json())
          .then(response => {
            if (response.errors){
              alert(response.errors)
            } else {
              this.setState({
                currentUser: response
              })
            }
          })
        }
  }

  handleSearchBar = (term) => {
    fetch(`http://127.0.0.1:3000/product/search/${term}`)
      .then(resp => resp.json())
      .then(data => this.parseData(data))
  }

  setUser = (response) => {
    this.setState({
      currentUser: response.user
    }, () => {
      localStorage.token = response.token
      this.props.history.push("/pantry")
    })

  }

  logout = (e) => {
    e.preventDefault()
    this.setState({
      currentUser: {username:"", id: null}
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/login")
    })
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
        <NavigBar handleSearchBar={this.handleSearchBar} logout={this.logout} username={this.state.currentUser.username}/>
        <Switch>
          <Route path="/login" render={() => <LoginForm setUser={this.setUser} />} />
          <Route path="/signup" render={() => <SignupForm setUser={this.setUser} />} />
          <Route path="/pantry"  render={() => <Pantry />} />
        </Switch>


        {this.state.currentIng && <FoodCard food={this.state.currentIng} id={this.state.currentUser.id}/>}


      </div>


    );
  }
}

export default App;
