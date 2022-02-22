import React from 'react';
import './recipe.css';

//recibe por props los valores a mostrar de cada receta 
// muestro los valores : imagen, nombre, tipo de dieta (vegetarian, vegan, glutenFree )
// y el tipo de dieta que sea la receta (diets)
export function Recipe(props){
    //console.log(recipes[0].title)
 console.log(props.recipe.title)
    
    return(
        <div className='card'>
            <h2>recipe</h2>
            <h2>{props.recipe.title}</h2>
           <img src={props.recipe.image}/>
           {props.recipe.diets.map(diet=> <h3>{diet}</h3>)}
        </div>
    )
}