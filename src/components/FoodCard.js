import React, { Component, useState } from 'react';





function FoodCard(props) {

    const handleAdd = () => {
        fetch(`http://127.0.0.1:3000/ingredient/create`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify({...props.food, user_id: 1, quantity: 1})
        }
        )
      }

    const { id,
        food_name,
        nf_calories,
        nf_cholesterol,
        nf_dietary_fiber,
        nf_p,
        nf_potassium,
        nf_protein,
        nf_saturated_fat,
        nf_sodium,
        nf_sugars,
        nf_total_carbohydrate,
        nf_total_fat,
        img_url} = props.food

    return (
        <div key={id}>
            <h1>{food_name}</h1>
            <img src={img_url} />
            <div> Calories: {nf_calories} </div>
            <div> Cholesterol: {nf_cholesterol} </div>
            <div> Dietary Fiber: {nf_dietary_fiber} </div>
            <div> P: {nf_p} </div>
            <div> Potassium: {nf_potassium} </div>
            <div> Protien: {nf_protein} </div>
            <div> Saturated Fat: {nf_saturated_fat} </div>
            <div> Sodium: {nf_sodium} </div>
            <div> Sugar: {nf_sugars} </div>
            <div> Carbohydrates: {nf_total_carbohydrate} </div>
            <div> Total Fat: {nf_total_fat} </div>


            <button onClick={handleAdd}>Add to Pantry</button>
        </div>
    )
}

export default FoodCard

