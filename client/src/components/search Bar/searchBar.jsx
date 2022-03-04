import React from 'react';
import './searchBar.css';
import {useDispatch} from 'react-redux';
import { getRecipesSearch } from '../../actions';

export function SearchBar (){
    const [stateInput, setStateInput]= React.useState('')
 
    const dispatch = useDispatch()
    
    function handleOnSubmit(e){
       e.preventDefault()         
       dispatch(getRecipesSearch(stateInput))
       setStateInput('')
       
    }
    function handleInput (e){
      e.preventDefault()
      setStateInput(e.target.value)

    }
        
    return(
        <div>            
            <form onSubmit={(e)=>handleOnSubmit(e)}>
                <input // hacer que se borre el input lueego de la busqueda
               
                type='text'
                autoComplete='off'
                placeholder='Search...'
                onChange={(e)=>handleInput(e)}
                value={stateInput}
                />
                <button type='submit'> Buscar</button>
            </form>
        </div>
    )
}