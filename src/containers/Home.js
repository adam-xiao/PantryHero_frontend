import React, { Component, useState } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'



class Home extends Component{

    render(){
        return(
            <Container fluid>
                <Row variant="light">
                    <Col>1 of 2</Col>
                </Row>
                <Row>
                    <Col>2 of 2</Col>
                </Row>
            </Container>
        )
    }
}

export default Home
