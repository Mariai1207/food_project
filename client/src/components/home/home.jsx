import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Nav } from '../nav/nav';
import { Recipes } from '../recipes/recipes';
import './home.css';
import { getRecipes, getTypes, filterByTypes, filterByOrder } from '../../actions';


export function Home(props){
    const dispatch = useDispatch()
    const recipes = useSelector((state)=>state.recipes) // estoy guardando lo que haya en el estado
    const types = useSelector((state)=>state.types)
    // cuando el componente se monte se traen las recetas
    useEffect (()=>{       
        dispatch(getRecipes())
        dispatch(getTypes())            
    },[])
    
    function handleFilterTypes(e){
      dispatch(filterByTypes(e.target.value))
        
    }
    function handleOrder(e){
    //  dispatch(filterByOrder(e.target.value))
        console.log(e.target.value)
    }
    
    return(
        <div>
            <Link exact to='/' >atras</Link>
            <Nav/> 
            <select onChange={(e)=>handleOrder(e)} >
                <option value='A-Z'> alphabetical  A-Z</option>
                <option value='Z-A'> alphabetical  Z-A</option>
                <option value='max-min'> score max-min </option>
                <option value='min-max'> score min-max  </option>
            </select> 

            <select onChange={(e)=>handleFilterTypes(e)}>
                <option value='all'>all</option>
                 {types.map(type=> <option value={type}>{type}</option>)}
            </select>
            
            <Recipes/>       
               
        </div>
    )
}