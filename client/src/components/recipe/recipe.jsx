import React from 'react';
import { Link } from 'react-router-dom';
import './recipe.css';


export function Recipe(props){      
    return(
        <div className='card'>
            
            <div className='image'>
            <img src={props.recipe.image} alt='' />

           </div>
           <div className='text'>
            <h2>recipe</h2>
            <h2>{props.recipe.title}</h2>
            <p>{props.recipe.sumary}</p>
            {props.recipe.diets.map(diet=> <h3 key={diet}>{diet}</h3>)}
           </div>
           <Link to= {`/recipes/${props.recipe.id}`}> detail </Link>
        </div>
    )
}