import React, {forceUpdate} from 'react';
import '../All.css';


function FoodCard(props) {

    const handleUpdate = (e) => {
      e.preventDefault()
        fetch(`http://127.0.0.1:3000/ingredients/${e.target.firstElementChild.dataset.id}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify({quantity: e.target.firstElementChild.value})
        }
        )
      }



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
        img_url,} = props.food

    return (
      <tr key={id}>
        <td className="tableText">
          <img src={img_url} className="foodImage"/>
          <h5>{food_name}</h5>
          <form onSubmit={handleUpdate}>
            Qty: <input type="text" size="4" data-id={id} placeholder={quantity}></input>
            <button>Update</button><br></br>
            <br></br>
          </form>
            <button onClick={()=>props.handleDelete(id)}>Remove</button>
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

