import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/nav';
import { Recipes } from '../recipes/recipes';
import './home.css';
import { getRecipes } from '../../actions';
import { Filters } from '../filters/filters';
import { Pages } from '../pages/pages';



export function Home() {
    const dispatch = useDispatch()
    const recipes= useSelector(state=> state.recipes)
    
    
    // estados locales
    const [currentPage, setCurrentPage]= useState(1) // pagina actual, siempre empieza en uno, pagina inicial
    const [recipesPage]= useState (9) // recetas mostradas por pagina
    const lastRecipePage= currentPage* recipesPage; // la posicion de la ultima receta de la pagina --> 9 
    const firstRecipePage= lastRecipePage- recipesPage; // 0
    const currentRecipes=  recipes.slice(firstRecipePage, lastRecipePage) // las recetas que esten en la pagina actual

    function pages (pageNumber){
        setCurrentPage(pageNumber)
    }


    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    



    return (
        <div>
            <Link exact to='/' >atras</Link>
            <Nav />
            <Pages recipesPage={recipesPage} recipes={recipes.length} pages={pages}/>
            <Filters />
            <Recipes currentRecipes={currentRecipes}/>
           
        </div>
    )
}