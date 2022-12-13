import React from "react";

function RecipeCard({ recipe, deleteRecipe }) {
  return (
    <React.Fragment>
      <tr>
          <td> {recipe.name}</td>
          <td> {recipe.cuisine}</td>
          <td> <img src={recipe.photo}/> </td>
          <td className="content_td"><p>{recipe.ingredients}</p></td>
          <td className="content_td"><p>{recipe.preparation}</p></td>
        <td> 
          <button 
            name="delete" 
            id={recipe.name} 
            onClick={deleteRecipe}
            >
            Delete
          </button>
        </td>
      </tr>
    </React.Fragment>
  )
}

export default RecipeCard