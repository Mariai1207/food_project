import {React, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";
import { getRecipeDetail } from '../../actions';
import './recipeDetail.css';


export function RecipeDetail (){
    const dispatch= useDispatch()
    const navigate= useNavigate()
    const params= useParams()
    const recipeDetail = useSelector((state)=>state.recipeId)    
    useEffect (()=>{     
        dispatch(getRecipeDetail(params.id))       
                    
    },[params.id, dispatch])
    let steps=[]
    if(recipeDetail.steps){
         steps= recipeDetail.steps.map(step=> step.step)
    }
   function clickGoBack(){
    navigate('/home')
   }
    return (
        <div>
           <nav></nav>
           
            <div className='contents'>
                <div className="title_img">
                    <p> {recipeDetail.title} </p>
                    <img className='image'src={recipeDetail.image} alt=''/>
                    <div className='diets'>
                        {recipeDetail.diets ? recipeDetail.diets.map(diet=> <p >{diet}</p>): ''}                   
                        <div className='score'>
                        {recipeDetail.score ? <p>Score: {recipeDetail.score}</p>: ''}
                        {recipeDetail.healthScore ? <p>Health Score:{recipeDetail.healthScore}</p>: ''}  
                        </div>
                    </div>
                    <div className='summary'>
                        <p> Summary</p>
                        <p > {recipeDetail.summary} </p>
                    </div>
                    <div className='steps'>
                   {steps.length?<h1>Preparation</h1> :null } 
                    {steps.map((step, index)=> 
                        <div > 
                            <p  id='index'> Step {index +1}</p>
                            <p id='description'>{step}</p>
                        </div>
                    )}
                    {recipeDetail.stepsDb? 
                    <div>
                        <h1>Preparation</h1>
                        <p>{recipeDetail.stepsDb}</p>
                    </div>: null}
                </div>
                </div>
            </div>


            <button onClick={()=>clickGoBack()}>Go Back</button>
            

          </div>
    )
}