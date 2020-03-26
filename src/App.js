import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import NavigBar from './components/NavigBar'
import Home from './containers/Home'
import FoodCard from './components/FoodCard';
import { NavLink } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
import SignUpForm from './components/SignUpForm'
import LoginForm from './components/LoginForm'
import Pantry from './containers/Pantry'
import Title from './containers/Title'
import FavRecipes from './containers/FavRecipes'
import FilteredRecipes from './containers/FilteredRecipes'




class App extends Component {

  state = {
    data: [],
    Search: "",
    currentIng: "",
    pantry: [],
    currentUser: { username: "", id: null },
    filteredRecipes: null
  }



  componentDidMount() {
    const token = localStorage.token

    if (token) {

      //get user info if token is present 
      fetch("http://localhost:3000/auto_login", {
        headers: {
          "Authorization": token
        }
      })
        .then(res => res.json())
        .then(response => {
          if (response.errors) {
            alert(response.errors)
          } else {
            this.setState({
              currentUser: response
            })
          }
        })

      //load pantry data by user
      fetch(`http://127.0.0.1:3000/user`, {
        headers: {
          "Authorization": localStorage.token
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.setState({ pantry: data })
          fetch(`http://127.0.0.1:3000/recipe/search/${data.map(item => item.food_name).join(",")}`)
          .then(resp => resp.json())
          .then(data => this.setState({ filteredRecipes: data }))
        }
        )

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
      currentUser: { username: "", id: null }
    }, () => {
      localStorage.removeItem("token")
      this.props.history.push("/")
    })
  }



  parseData = (arr) => {
    this.setState({
      currentIng: {
        nf_id: arr[0].ndb_no,
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

  handleDelete = (id) => {
    fetch(`http://127.0.0.1:3000/ingredients/${id}`,
      { method: 'DELETE' }
    ).then(this.setState({ pantry: this.state.pantry.filter(item => item.id !== id) }))
  }




  render() {


    return (
      <div className="App">


        <h1 className="tableText" onClick={() => this.props.history.push("/")}>Pantry Hero</h1>
        <NavigBar handleSearchBar={this.handleSearchBar} logout={this.logout} username={this.state.currentUser.username} />
        <div className="mainBody">
          <Switch>
            <Route exact path="/" component={Title} />
            <Route path="/login" render={() => <LoginForm setUser={this.setUser} history={this.props.history} />} />
            <Route path="/signup" render={() => <SignUpForm setUser={this.setUser} history={this.props.history} />} />
            <Route path="/pantry" render={() => <Pantry handleSearchBar={this.handleSearchBar} currentIng={this.state.currentIng} user_id={this.state.currentUser.id} pantry={this.state.pantry} handleDelete={this.handleDelete} />} />
            <Route path="/home" render={() => <Home filteredRecipes={this.state.filteredRecipes} pantry={this.state.pantry}/>} />
            <Route path="/favrecipes" render={() => <FavRecipes />} />
            <Route path="/filteredrecipes" render={() => <FilteredRecipes pantry={this.state.pantry} filteredRecipes={this.state.filteredRecipes}/>} />
          </Switch>
        </div>

      </div>


    );
  }
}

export default App;
