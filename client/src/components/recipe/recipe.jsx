import React from 'react';
import { Link } from 'react-router-dom';
import './recipe.css';


export function Recipe(props){      
    return(
        <div className='container'>
            <div className='card'>          
                <figure>       
                    <img className='image' src={props.recipe.image} alt='' />                
                </figure>            
                <div className='info'>
                    <h2>{props.recipe.title}</h2>  
                    <div className='types'>
                    {props.recipe.diets.map(diet=> <p className='text' key={diet}>{diet}</p>)}
                    </div>
                   
                </div>
                <Link to= {`/recipes/${props.recipe.id}`}> <button className='button'>detail</button>  </Link>
    
            </div>  
        </div>
    )
}