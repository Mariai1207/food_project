import React from 'react';
import './searchBar.css';
import {useDispatch} from 'react-redux';
import { getRecipes } from '../../actions';

export function SearchBar (){
    const [stateInput, setStateInput]= React.useState(
        {input:''}
    )
 
    const dispatch = useDispatch()
    
    function handleOnSubmit(){
       alert(stateInput)            
      // dispatch(getRecipes(stateInput))
    }
    function handleInput (e){
      // console.log(e.target.value)
       setStateInput({input:e.target.value})
       console.log(stateInput)
       
      
        
    }

    return(
        <div>            
            <form onSubmit={(e)=>handleOnSubmit(e)}>
                <input
                type='text'
                autoComplete='off'
                onChange={(e)=>handleInput(e)}
                />
                <button type='submit'> Buscar</button>
            </form>
        </div>
    )
}