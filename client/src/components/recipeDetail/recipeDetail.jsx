import {React, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from "react-router-dom";
import { getRecipeDetail } from '../../actions';
import { Nav } from '../nav/nav';
import './recipeDetail.css';


export function RecipeDetail (){
    const dispatch= useDispatch()
    const params= useParams()
    const recipeDetail = useSelector((state)=>state.recipeId)    
    useEffect (()=>{     
        dispatch(getRecipeDetail(params.id))       
                    
    },[params.id, dispatch])

    return (
        <div>
            <Nav/>
            recipeDetail
            <div className="title_img">
                <p> {recipeDetail.title} </p>
                <img className='image'src={recipeDetail.image} alt=''/>
            </div>
            <div className='summary'>
                <p>Summary</p>
                <p > {recipeDetail.summary} </p>
            </div>


            {recipeDetail.diets ? recipeDetail.diets.map(diet=> <h2>{diet}</h2>): ''}
            {recipeDetail.score ? <h2>{recipeDetail.score}</h2>: ''}
            {recipeDetail.healthScore ? <h2>{recipeDetail.healthScore}</h2>: ''}      
            

          </div>
    )
}