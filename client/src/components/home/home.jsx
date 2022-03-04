import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Nav } from '../nav/nav';
import { Recipes } from '../recipes/recipes';
import { getRecipes } from '../../actions';
import { Filters } from '../filters/filters';
import { Pages } from '../pages/pages';
import './home.css';


export function Home() {
    const dispatch = useDispatch()
    const recipes= useSelector(state=> state.recipes)

    const [currentPage, setCurrentPage]= useState(1) 
    const [recipesPage]= useState (9) 
    const lastRecipePage= currentPage* recipesPage; 
    const firstRecipePage= lastRecipePage- recipesPage; 
    const currentRecipes=  recipes.slice(firstRecipePage, lastRecipePage) 

    function pages (pageNumber){
        setCurrentPage(pageNumber)
        
    }
    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    



    return (
        <div>
            <Nav />
            <Pages  recipesPage={recipesPage} recipes={recipes.length} pages={pages} currentPage={currentPage} key={recipes.id} />
            <Filters />
            <Recipes currentRecipes={currentRecipes} />
            {!recipes.length? <h3>nothing</h3>:null}
           
        </div>
    )
}