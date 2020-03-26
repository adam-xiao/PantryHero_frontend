import React, { Component } from 'react';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import RecipeCarouselCard from '../components/RecipeCarouselCard'
import '../All.css';
import '../App.css';





class Home extends Component{

    

    render(){

        const { id,
            nf_card,
              food_name,
              nf_calories,
              nf_cholesterol,
              nf_dietary_fiber,
              nf_p,
              quantity,
              nf_potassium,
              nf_protein,
              nf_saturated_fat,
              nf_sodium,
              nf_sugars,
              nf_total_carbohydrate,
              nf_total_fat,
              img_url,} = this.props.pantry

              let calories = this.props.pantry.map(item => item.nf_calories)
              let carbs = this.props.pantry.map(item => item.nf_total_carbohydrate)
              let protein = this.props.pantry.map(item => item.nf_protein)
              let totalFat = this.props.pantry.map(item => item.nf_total_fat)

        return(
           
            <Container fluid className="homeImage">
               
                
                <div>
                    <Row>
                        <Col>Cumulative Pantry Stats</Col>
                    </Row>
                    <Row>
                        <Col>Total Calories: {calories.reduce( (acc, init) => acc + init, 0)}</Col>
                        <Col>Total Carbs: {carbs.reduce( (acc, init) => acc + init, 0)}</Col>
                    </Row>
                    <Row>
                        <Col>Total Protein: {protein.reduce( (acc, init) => acc + init, 0)}</Col>
                        <Col>Total Fat: {totalFat.reduce( (acc, init) => acc + init, 0)}</Col>
                    </Row>
                </div>

                <Row>
                    <Jumbotron >
                        <img src="https://images.unsplash.com/photo-1545601445-4d6a0a0565f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"/>
                    </Jumbotron>            
                </Row>

              
            </Container>      
        )
    }
}

export default Home
