import React from 'react';
import { Recipe } from '../recipe/recipe';
import './recipes.css';

// recibo por props el estado global (array de las recetas)
// por cada una renderizo una recipe pasadole props:
// nombre, tipo de dieta (vegetarian, vegan, glutenFree ), y lo que este en diets
export function Recipes(props){

    return(
        <div className='cards'>
            {props.currentRecipes.map(recipe =><Recipe recipe={recipe} key={recipe.id}/> )}
          
        </div>
    )
}