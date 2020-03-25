import React from 'react';
import '../All.css';


function FoodCard(props) {

    // const handleAdd = () => {
    //     fetch(`http://127.0.0.1:3000/ingredient/create`,
    //     {
    //       method: 'post',
    //       headers: {
    //         'Content-Type': 'application/json'},
    //       body: JSON.stringify({...props.food, user_id: props.user_id, quantity: 1})
    //     }
    //     )
    //   }

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
      <tr key={id}>
        <td className="tableText">
          <img src={img_url} className="foodImage"/>
          <h5>{food_name}</h5>
        </td>
        <td className="tableText">
            <p>Calories: {nf_calories}</p>
            <p>Carbohydrates: {nf_total_carbohydrate}</p>
            <p>Protein: {nf_protein}</p>
            <p>Sodium: {nf_sodium}</p>
            <p>Sugar: {nf_sugars}</p>
        </td>
        <td className="tableText">
            <p>Cholesterol: {nf_cholesterol}</p>
            <p>Saturated Fat: {nf_saturated_fat}</p>
            <p>Total Fat: {nf_total_fat}</p>
            <p>Dietary Fiber: {nf_dietary_fiber}</p>
            <p>Potassium: {nf_potassium}</p>
        </td>
        {/* <td>
          <button onClick={handleAdd}>Add to Pantry</button>
        </td> */}
      </tr>
        //     <div> P: {nf_p} </div>
        //     
       
    )
}

export default FoodCard

