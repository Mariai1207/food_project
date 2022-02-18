import React from 'react';
import './searchBar.css';

export function SearchBar (){
    const [stateInput, setStateInput]= React.useState(
        {input:''}
    )
    
    
    function handleOnSubmit(){
        alert(stateInput)
    }
    function handleInput (e){
       console.log(e.target.value)
       setStateInput( e.target.value)
        
    }

    return(
        <div>
            <h1>search bar</h1>
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