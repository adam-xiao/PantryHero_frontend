import React, { Component } from 'react';
import FoodCard from '../components/FoodCard';
import Search from '../components/Search';

class Pantry extends Component {

    state = {
        pantry: []
    }

    componentDidMount() {
        fetch(`http://127.0.0.1:3000/user`, {
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(data => this.setState({ pantry: data }))
    }
    render() {
        return (
            <div>
                <h1>Pantry</h1>

                {localStorage.token ?

                    <div>
                        <h2>Add new items</h2>
                        <Search handleSearchBar={this.props.handleSearchBar} />
                        {this.props.currentIng && <FoodCard food={this.props.currentIng} user_id={this.props.user_id}/>}
                        {this.state.pantry.map(item => <FoodCard food={item}  key={item.id}/>)}
                    </div>

                    : <div>please sign in </div>}
            </div>

        )
    }

}

export default Pantry 
