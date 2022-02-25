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
                    
    },[dispatch])
    function onClick(e){
    e.preventDefault()
     console.log('desde el botoon',recipeDetail.title)
}
    return (
        <div>
            <Nav/>
            recipeDetail
            <h1>
            {recipeDetail.title}
            
            </h1>
            <img src={recipeDetail.image}/>
            
            <buton onClick={(e)=>onClick(e)}>x</buton>
        </div>
    )
}