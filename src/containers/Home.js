import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import RecipeCarouselCard from '../components/RecipeCarouselCard'
import '../All.css';
import '../App.css';





class Home extends Component {



    render() {

        let calories = this.props.pantry.map(item => item.nf_calories * item.quantity)
        let carbs = this.props.pantry.map(item => item.nf_total_carbohydrate * item.quantity)
        let protein = this.props.pantry.map(item => item.nf_protein * item.quantity)
        let totalFat = this.props.pantry.map(item => item.nf_total_fat * item.quantity)

        return (

            <Container fluid className="homeContainer">
                <Jumbotron className="homeImage">
                <div className="stats">
                <Row>
                        <Col className="welcome">Welcome back</Col>
                    </Row>
                    <Row>
                        <Col className="header">Cumulative Pantry Stats:</Col>
                    </Row>
                    <br></br>
                    <div className="numbers">
                    <Row>
                        <Col>Total Calories: {calories.reduce((acc, init) => acc + init, 0)}</Col>
                        <Col>Total Carbs: {carbs.reduce((acc, init) => acc + init, 0)}g</Col>
                    </Row>
                    <Row>
                        <Col>Total Protein: {protein.reduce((acc, init) => acc + init, 0)}g</Col>
                        <Col>Total Fat: {totalFat.reduce((acc, init) => acc + init, 0)}g</Col>
                    </Row>
                    </div>
                </div>

                </Jumbotron>

                <Row>
                </Row>


            </Container>
        )
    }
}

export default Home
