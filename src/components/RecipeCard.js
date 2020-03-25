import React, {forceUpdate} from 'react';
import '../All.css';


function RecipeCard(props) {


    const { 
        id,
        title,
        image,
        missedIngredients,
        usedIngredients
        } = props.recipe

    return (
      <tr key={id}>
        <td className="tableText">
            <img src={image} className="foodImage"/>
            <p>{title}</p>
            <button>Favorite</button>
        </td>
        <td className="tableText">
           
        </td>
      </tr>
    )
}

export default RecipeCard

