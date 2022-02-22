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
        console.log("Estoy montando el componente")   
        dispatch(getRecipes())
       dispatch(getTypes())
      
        
    },[])
    console.log(recipes.title)
    function handleFilterTypes(e){
      dispatch(filterByTypes(e.target.value))
        console.log(e.target.value)
    }
    function handleOrder(e){
    //  dispatch(filterByOrder(e.target.value))
        console.log(e.target.value)
    }
    console.log(types)
    return(
        <div>
            <h1>Home</h1>
            <Link exact to='/' >atras</Link>
            <Nav/> 
            <Recipes/>  

        <select onChange={(e)=>handleFilterTypes(e)}>
            {types.map(type=> <option value={type}>{type}</option>)}
        </select>
           
    {/* cada seleccion de una opcion debe despachar una action  */}
            <select onChange={(e)=>handleOrder(e)} >
                <option value='A-Z'> alphabetical  A-Z</option>
                <option value='Z-A'> alphabetical  Z-A</option>
                <option value='max-min'> score max-min </option>
                <option value='min-max'> score min-max  </option>
            </select>   

        </div>
    )
}