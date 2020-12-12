import React from "react";

const Recipes = (props) =>
{
    const {recipes}=props;
    return (
        <div class="card-columns">{
            recipes.map (recipe =>(
    
                <div class="card">
                    <img src={recipe.recipe.image} class="img-fluid mx-auto w-50" />
                  <div class="card-body">
                 <h5>{recipe.recipe.label}</h5>
                  </div>
                  <ul class="list-group list-group-flush">
                        {recipe.recipe.ingredientLines.map(ingredient =>(
                            <li class="list-group-item">{ingredient}</li>
                        ))
                    }
                </ul>
                </div>
           
            ))
} 
        </div>
    );
}

export default Recipes;