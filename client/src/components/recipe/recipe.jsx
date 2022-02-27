import React from 'react';
import { Link } from 'react-router-dom';
import './recipe.css';


export function Recipe(props){      
    return(
        <div className='card'>
            <h2>recipe</h2>
            <h2>{props.recipe.title}</h2>
           <img src={props.recipe.image} alt='' />
           {props.recipe.diets.map(diet=> <h3 key={diet}>{diet}</h3>)}
           <Link to= {`/recipes/${props.recipe.id}`}> detail </Link>
        </div>
    )
}