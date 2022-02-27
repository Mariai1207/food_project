import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { getTypes, postRecipe } from '../../actions';
import './addRecipe.css';

export function AddRecipe(){
    const dispatch= useDispatch()
    const allTypes= useSelector((state)=>state.types)
    const [error, setError]= useState({
        name: '', 
        sumary: '',
        score: '',
        healthScore:'',
        steps: '',
        image:'',
        types: ''
    })
    const [state, setState]= useState({
        name: '', 
        sumary: '',
        score: '',
        healthScore:'',
        steps: '',
        image:'',
        types: []
    })
    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch])


    function validateInput(e){
        handleChangeInput(e)
        switch (e.target.name){
            case "name" :
                if(/\d/.test(e.target.value)){
                    setError(
                        {
                            ...error,
                            [e.target.name]: 'the name can´t contains any number'
                        }
                    )
                }else{
                    setError({
                        ...error,
                        [e.target.name]: ''
                    })
                }
                return
            
            
            
                default: 
            return e.target.name
        }
        
    }

    function handleChangeInput(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    function handleChangeCheckbox(e){
        if(e.target.checked){
        setState({
            ...state,
            types:[...state.types, e.target.value]
        })
        }
    }   
    function handleSubmit(e){
        e.preventDefault()
        dispatch(postRecipe(state))
    }

    return(
        <div>
            <h2>add recipe component</h2>
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                <div className='position'>
                    <label >Name</label>
                    <input 
                    type='text' 
                    value={state.name}
                    size={100} 
                    name="name" 
                    onChange={(e)=>validateInput(e)} />        
                </div>
                 {error.name? <h3>{error.name}</h3>: null}

                <div className='position'>   
                    <label>Sumary</label> 
                    <textarea cols={98} name="sumary" onChange={(e)=>handleChangeInput(e)}></textarea>      
                </div> 
                

                <div className='position'>
                    <label >Score</label> 
                    <input  
                    type= 'text'
                    value={state.score}
                    size={100}
                    name="score"
                    onChange={(e)=>handleChangeInput(e)}/>       
                </div>
                
      
                <div className='position'>
                    <label>healthScore</label> 
                    <input 
                    type='text' 
                    value={state.healthScore}
                    size={100} 
                    name="healthScore" 
                    onChange={(e)=>handleChangeInput(e)}/>       
                </div>
                
     
                <div className='position'>
                    <label>Steps</label> 
                    <input
                    type='text' 
                    value={state.steps}
                    size={100} 
                    name="steps" 
                    onChange={(e)=>handleChangeInput(e)}/>        
                </div>
                <div className='position'>
                    <label>Image</label> 
                    <input
                    type='text' 
                    value={state.image}
                    size={100} 
                    name="image" 
                    onChange={(e)=>handleChangeInput(e)}/>        
                </div>
                <div>
                    
                {allTypes.map((type)=>(
                   <label>
                    <input
                    type='checkbox'
                    value={type}
                    name={type}
                    onChange={(e)=>{handleChangeCheckbox(e)}}
                    />{type}</label> 
                ))}
                </div>
                                

                <div className='position'>
                    <button type='submit'>ADD</button> 
                </div>
            </form>
        </div>
)

       
    
}
