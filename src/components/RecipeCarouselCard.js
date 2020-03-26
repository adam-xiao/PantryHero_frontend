import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'




function RecipeCarouselCard(props){

    const {
        name,
        thumbnail_url,
        id,
        description,
        original_video_url,
        instructions
        } = props.recipe

    // debugger

    return(
        <Carousel.Item>
            <img
            // className="d-block w-100"
            src={thumbnail_url}
            
            />
            <Carousel.Caption>
            <h3>{name}</h3>
            </Carousel.Caption>
        </Carousel.Item>  
    )
}

export default RecipeCarouselCard