import {React, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { Nav } from '../nav/nav';
import { Recipes } from '../recipes/recipes';
import './home.css';
import { getRecipes } from '../../actions';


export function Home(props){
    const dispatch = useDispatch()
    const recipes = useSelector((state)=>state.recipes) // estoy guardando lo que haya en el estado

    // cuando el componente se monte se traen las recetas
    useEffect (()=>{
        dispatch(getRecipes())
        
    }, [])
    return(
        <div>
            <h1>Home</h1>
            <Link exact to='/' >atras</Link>
            <Nav/> 
            <Recipes/>  


           { /* cada opcion debe ser un tipo de dieta, hago un map  y por cada tipo una opcion*/ }
           { /* en la db debe estar los tipo de dietas, (incluidos los de la api)*/ }
            {/* como me traigo el arreglo con los tipos desde la db? */}

    {/* cada seleccion de una opcion debe despachar una action  */}
            <select>
                <option> alphabetical  A-Z</option>
                <option> alphabetical  Z-A</option>
                <option> score max-min </option>
                <option> score min-max  </option>
            </select>   

        </div>
    )
}