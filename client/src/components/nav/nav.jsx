import React from 'react';
import { NavLink } from 'react-router-dom';
import { SearchBar } from '../search Bar/searchBar';
import add from '../../img/add.png'
import goBack from '../../img/goBack.png'
import './nav.css';

export function Nav (){
    return(
        <div className='NavBar'>            
            <div className='SearchBar'>
                 <SearchBar/>
            </div>
            <div className='goBack'>
                <NavLink to='/'>
                    <img id= 'goBack' src={goBack} alt='goBack'/>
                </NavLink>
            </div>  
            <div className='AddRecipe'>
                <NavLink to='/createRecipe'>
                    <img id= 'addRecipe' src={add} alt='add'/>
                </NavLink>
            </div>
            
        </div>
    )
}