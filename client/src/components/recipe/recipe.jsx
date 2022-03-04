import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import { deleteRecipe} from '../../actions';
import './recipe.css';



export function Recipe(props){   
   
    return(
        <div className='container'>
           
            <div className='card'>  
            {/*<button onClick={(e)=>handleClick(e)}>X 1</button>*/}   
              
                <figure>       
                    <img className='image' src={props.recipe.image} alt='' />                
                </figure>            
                <div className='info'>
                    <h2>{props.recipe.title}</h2>  
                    <div >
                    {props.recipe.diets?props.recipe.diets.map(diet=> <p className='tex' key={diet}>{diet}</p>):''}
                    
                    </div>
                   
                </div>
                <Link to= {`/recipes/${props.recipe.id}`}> <button className='button'>detail</button>  </Link>
    
            </div>  
        </div>
    )
}