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
                    <div >
                    {props.recipe.diets?props.recipe.diets.map(diet=> <p className='tex' key={diet}>{diet}</p>):''}
                    
                    </div>
                    {props.recipe.readyInMinutes? <p>{props.recipe.readyInMinutes}</p>: null}
                   
                </div>
                <Link to= {`/recipes/${props.recipe.id}`}> <button className='button'>detail</button>  </Link>
                
            </div>  
        </div>
    )
}