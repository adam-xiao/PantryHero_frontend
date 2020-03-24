import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import RecipeCarousel from '../components/RecipeCarousel'



class Home extends Component{

    render(){
        return(
            <Container>
                <Row>
                    <Col>1 of 2</Col>
                </Row>
                <Row>
                <Col>
                    <RecipeCarousel />
                </Col>
                </Row>
            </Container>
        )
    }
}

export default Home
