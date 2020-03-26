import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'


function SearchCard(props) {

    const [qty, setQty] = useState(1)

    const handleAdd = () => {
        fetch(`http://127.0.0.1:3000/ingredient/create`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json'},
          body: JSON.stringify({...props.food, user_id: props.user_id, quantity: qty})
        }
        )
      }

    const { id,
        nf_id,
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
        // <div key={id}>
        <Jumbotron key={id}>
            <h1>{food_name}</h1>
            <img src={img_url} className="foodImage" />
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

            <form onSubmit={handleAdd}>
            Qty: <input type="number" style={{width:"50px"}} data-id={id} min="1" required="required" value={qty} onChange={(e)=>setQty(e.target.value)}></input>
            <button>Add to Pantry</button>
          </form>
        </Jumbotron>
    )
}

export default SearchCard