import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import RecipeCard from '../components/RecipeCard'


export default class FilteredRecipes extends Component{

    state = {
        pantry: [],
        filteredRecipes: []
    }



    componentDidMount() {
        fetch(`http://127.0.0.1:3000/user`, {
            headers: {
                "Authorization": localStorage.token
            }
        })
            .then(resp => resp.json())
            .then(data => this.setState({ pantry: data }))


            let ingNames = this.state.pantry.map(item => item.food_name).join(",")
        
            fetch(`http://127.0.0.1:3000/recipe/search/${ingNames}`)
              .then(resp => resp.json())
              .then(data => this.setState( {filteredRecipes: data}))
    }
   
    

    render(){ 
        
        return(
            
            <div>
            <h1>Recipes You Can Make!</h1>

            {localStorage.token ?

                <div>
                    <button onClick={this.filterRecipes}>Show Recipes</button>
                    <Container fluid>
                        <Row>
                            <Col sm={8}>
                            <Table striped bordered hover>
                                {/* {this.state.filteredRecipes ? 
                                     <tr>
                                        <th>Recipe</th>
                                        <th>Used Ingredients</th>
                                        <th>Missing Ingredients</th>
                                    </tr> 
                                    : null} */}
                                <tbody>
                                    {this.state.filteredRecipes.map(recipe => <RecipeCard recipe={recipe}/>)} 
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                    </Container>
                    
                </div>

                : <div>please sign in </div>}
        </div>

        )
    }
}