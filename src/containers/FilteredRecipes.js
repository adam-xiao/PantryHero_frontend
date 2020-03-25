import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import RecipeCard from '../components/RecipeCard'


export default class FilteredRecipes extends Component{
       

    render(){ 
        
        return(
            
            <div>
            <h1>Recipes You Can Make!</h1>

            {localStorage.token ?

                <div>
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
                                    {this.props.filteredRecipes && this.props.filteredRecipes.map(recipe => <RecipeCard recipe={recipe}/>)} 
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