import React, { Component, useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class PantryContainer extends Component{

    //https://react-bootstrap.netlify.com/components/overlays/#popovers`

    render(){
        return(
            <Container fluid>
                <Row>
                    <Col>1 of 2</Col>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        )
    }
}

export default Home
