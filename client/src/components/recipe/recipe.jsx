import React from 'react';
import { useSelector } from 'react-redux';
import './recipe.css';

//recibe por props los valores a mostrar de cada receta 
// muestro los valores : imagen, nombre, tipo de dieta (vegetarian, vegan, glutenFree )
// y el tipo de dieta que sea la receta (diets)
export function Recipe(props ){
    const recipes = useSelector((state)=>state.recipes)
    const array=[{},{}]
   // console.log(array[0])
   //const  titulo= recipes.results[1].title
   // console.log(titulo)
    
    return(
        <div className='card'>
            <h2>recipe</h2>
            <h2></h2>
        </div>
    )
}