import {React, useEffect} from "react";
import {useSelector, useDispatch}  from'react-redux'
import { useNavigate } from "react-router-dom";
import { getRecipes } from '../../actions';
import { Recipe } from "../recipe/recipe";
import './recipeCreated.css';


export default function RecipeCreated(){
   const recipeCreated= useSelector(state=> state.lastRecipe)
    const dispatch= useDispatch();
    const navigate= useNavigate()
  
    useEffect(() => {
        dispatch(getRecipes())
        
    }, [dispatch])

function handleClick(e){
console.log(e.target.name)
   if(e.target.name==='Home'){
       navigate('/home')
   }else if(e.target.name==='Create'){
    navigate('/createRecipe')
   }
}
    return(
        <div className="page">
            <div className="recipe"> 
            {<Recipe recipe={recipeCreated}/>}
            </div> 
            
            <div className= "text">
                <div > 
                    <p >your recipe has been created successfully, <br/> what do you want to do?</p>
                </div>

                <div>
                        <button className="button1" name='Home' onClick={(e)=>handleClick(e)}> Go Home </button>
                </div>
                <div>
                        <button className="button1" name= 'Create'onClick={(e)=>handleClick(e)}> Create new recipe </button>
                </div>
            </div>
        </div>
    )
}