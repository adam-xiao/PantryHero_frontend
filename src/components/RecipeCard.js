import React, { forceUpdate } from 'react';
import '../All.css';


function RecipeCard(props) {


  const {
    name,
    thumbnail_url,
    id,
    description,
    original_video_url,
    instructions
  } = props.recipe

  return (

      <tr key={id}>
        <td className="tableText">
          <h4>{name}</h4>
          <img src={thumbnail_url} className="foodImage" />
        </td>

        <td>
          {description}
        </td>

        <td className="tableText">
          <video width="320" height="240" controls>
              <source src={original_video_url} type="video/mp4" />
          </video>
        </td>

        <td className="instructions">
          <ol>
            {instructions && instructions.map(step => <li>{step.display_text}</li>)}
          </ol>
        </td>
      </tr>

  )
}

export default RecipeCard

