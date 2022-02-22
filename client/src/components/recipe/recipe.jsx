import React from 'react';
import './recipe.css';


export function Recipe(props){      
    return(
        <div className='card'>
            <h2>recipe</h2>
            <h2>{props.recipe.title}</h2>
           <img src={props.recipe.image}/>
           {props.recipe.diets.map(diet=> <h3>{diet}</h3>)}
        </div>
    )
}