import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class FilteredRecipes extends Component{

    render(){
        return(
            <div>
            <h1>Recipes You Can Make!</h1>

            {localStorage.token ?

                <div>
                    <br></br>
                    <Container fluid>
                        <Row>
                            <Col sm={8}>
                               Hi from filtered
                            </Col>
                        </Row>
                    </Container>
                    
                </div>

                : <div>please sign in </div>}
        </div>

        )
    }
}