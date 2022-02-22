import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchBar } from '../search Bar/searchBar';
import './nav.css';

export function Nav (){
    return(
        <div className='NavBar'>            
            <div className='SearchBar'>
                 <SearchBar/>
            </div>
            <div className='AddRecipe'>
                <NavLink to='/createRecipe'>
                    Add recipe
                </NavLink>
            </div>
        </div>
    )
}