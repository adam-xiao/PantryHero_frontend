import React, {forceUpdate} from 'react';
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
            <p>{name}</p>
            <img src={thumbnail_url} className="foodImage"/>
            <button>Favorite</button>
        </td>
        <td className="tableText">
        <video width="320" height="240" controls>
          Video
              <source src={original_video_url} type="video/mp4"/>
            </video>
        </td>
        <td className="tableText">
          {description}
          <br></br>
          <br></br>
          Instructions:
          <ol>
        {instructions && instructions.map(step=><li>{step.display_text}</li>)}
        </ol>
        </td>
      </tr>
    )
}

export default RecipeCard

