import React, { Component } from 'react';
import FoodCard from '../components/FoodCard';

class Pantry extends Component {

    state = {
        pantry: []
    }

    componentDidMount(){
        fetch(`http://127.0.0.1:3000/user`, {headers: {
            "Authorization": localStorage.token   
        }} )
        .then(resp => resp.json())
        .then(data => this.setState({pantry: data}))
    }
    render(){
    return (
        <div>        
            <h1>Pantry</h1>
            {localStorage.token ? this.state.pantry.map(item => <FoodCard food={item} />) : <div>please sign in </div> }
        </div>

    )
    }

}

export default Pantry 
