import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import RecipeCard from '../components/RecipeCard'


export default class FilteredRecipes extends Component {


    render() {

        return (

            <div>
                <h1>Recipes You Can Make!</h1>

                {localStorage.token ?

                    <div>
                        <Container fluid>
                            <Row>
                                <Col sm={8}>
                                    <Table striped bordered hover>
                                        <tr>
                                            <th>Recipe</th>
                                            <th>Description</th>
                                            <th>Video</th>
                                            <th>Instructions</th>
                                        </tr>

                                            {this.props.filteredRecipes && this.props.filteredRecipes.map(recipe => <RecipeCard recipe={recipe} />)}

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