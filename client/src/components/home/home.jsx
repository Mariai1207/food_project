import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/nav';
import { Recipes } from '../recipes/recipes';
import './home.css';
import { getRecipes } from '../../actions';
import { Filters } from '../filters/filters';



export function Home() {
    const dispatch = useDispatch()
    const recipes= useSelector(state=> state.recipes)
    
    
    // estados locales
    const [currentPage, setCurrentPage]= useState(1) // pagina actual, siempre empieza en uno, pagina inicial
    const [recipesPage, setRecipesPage]= useState (9) // recetas mostradas por pagina
    const lastRecipePage= currentPage* recipesPage; // la posicion de la ultima receta de la pagina --> 9 
    const firstRecipePage= lastRecipePage- recipesPage; // 0
    const currentRecipes=  // las recetas que esten en la pagina actual



    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    



    return (
        <div>
            <Link exact to='/' >atras</Link>
            <Nav />
            <Filters />
            <Recipes />
        </div>
    )
}