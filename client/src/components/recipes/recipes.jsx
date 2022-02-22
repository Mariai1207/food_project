import React from 'react';
import { Recipe } from '../recipe/recipe';
import { useSelector } from 'react-redux';
import './recipes.css';

// recibo por props el estado global (array de las recetas)
// por cada una renderizo una recipe pasadole props:
// nombre, tipo de dieta (vegetarian, vegan, glutenFree ), y lo que este en diets
export function Recipes(){
    const recipes = useSelector((state)=>state.recipes)

    return(
        <div className='cards'>
            {recipes.map(recipe =><Recipe recipe={recipe}/> )}
            
        </div>
    )
}