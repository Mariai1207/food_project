import {React, useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import { getTypes, postRecipe } from '../../actions';
import './addRecipe.css';

export function AddRecipe(){
    const dispatch= useDispatch()
    const allTypes= useSelector((state)=>state.types)
    const [error, setError]= useState({ })
    const navigate= useNavigate()
    const [state, setState]= useState({types:[]})
    useEffect(()=>{
        dispatch(getTypes())
    }, [dispatch])


    function validateInput(e){
        handleChangeInput(e)
        switch (e.target.name){
            case "name" :           
                /\d/.test(e.target.value)? 
                setError({...error, [e.target.name]: 'the name can´t contains any number'}):
                setError({...error,[e.target.name]:''})
                return
            case "sumary":
                e.target.value.length>1234? setError({...error,[e.target.name]: 'the text can´t exceed 1234 characters'}):
                setError({...error,[e.target.name]: ''})         
                return
            case "score":
                (/^[0-9]*$/.test(e.target.value) && e.target.value<=100)? setError({...error, [e.target.name]: ''}):
                setError({...error,[e.target.name]:'this field can´t contains characters or exceed 100 points'})
                return
            case "healthScore":
                (/^[0-9]*$/.test(e.target.value) && e.target.value<=100)? setError({...error, [e.target.name]: ''}):
                setError({...error,[e.target.name]:'this field can´t contains characters or exceed 100 points'})
                return
        
            case "steps":
                e.target.value.length>3000? setError({...error,[e.target.name]: 'the text can´t exceed 3000 characters'}):
                setError({...error,[e.target.name]: ''})         
                return
            case "image":
                /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/.test(e.target.value)? setError({...error,[e.target.name]:''}): 
                setError({...error, [e.target.name]: 'this field must contain a url'})
                
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
        else{
            const types = state.types.filter(type => type !== e.target.value)

            setState({
                ...state,
                types:types
            })
        }
    }   
    function handleSubmit(e){
        e.preventDefault()
        if(state.name&&state.sumary&&!error.name&&!error.sumary&&!error.score&&!error.healthScore&&!error.steps&&!error.image){
        dispatch(postRecipe(state))
        navigate('/recipecreatedsuccessfully')
        }else{
            alert('the name and summary fields are required')
        }

        
    }


    return(
        <div>
           <h2 className='titleAddRecipe'>
            Create your recipe!
           </h2>
           
            <form className='form' onSubmit={(e) =>{handleSubmit(e)} } >
                <div className='position'>
                    <label htmlFor='name'>Name</label>
                    <input 
                    className='input'
                    id='name'
                    type='text' 
                    value={state.name}
                    size={100} 
                    name="name" 
                    onChange={(e)=>validateInput(e)} />        
                </div>
                 {error.name? <p className='errorText'>{error.name}</p>: null}

                <div className='position'>   
                    <label htmlFor='summary'>Summary</label> 
                    <textarea className='input' id= 'summary'cols={98} name="sumary" onChange={(e)=>validateInput(e)}></textarea>      
                </div> 
                {error.sumary? <p className='errorText'>{error.sumary}</p>: null}
                

                <div className='position'>
                    <label htmlFor='score' >Score</label> 
                    <input  
                    className='input'
                    id='score'
                    type= 'text'
                    value={state.score}
                    size={100}
                    name="score"
                    onChange={(e)=>validateInput(e)}/>       
                </div>
                {error.score? <p className='errorText'>{error.score}</p>: null}
                
      
                <div className='position'>
                    <label htmlFor='healtscore'>HealthScore</label> 
                    <input className='input'
                    id='healtscore'
                    type='text' 
                    value={state.healthScore}
                    size={100} 
                    name="healthScore" 
                    onChange={(e)=>validateInput(e)}/>       
                </div>
                {error.healthScore? <p className='errorText'>{error.healthScore}</p>: null}
                
     
                <div className='position'>
                    <label htmlFor='steps'>Steps</label> 
                    <input
                    className='input'
                    id='steps'
                    type='text' 
                    value={state.steps}
                    size={100} 
                    name="steps" 
                    onChange={(e)=>validateInput(e)}/>        
                </div>
                {error.steps? <p className='errorText'>{error.steps}</p>: null}
                <div className='position'>
                    <label htmlFor='image'>Image</label> 
                    <input
                    className='input'
                    id='image'
                    type='text' 
                    value={state.image}
                    size={100} 
                    name="image" 
                    onChange={(e)=>validateInput(e)}/>        
                </div>
                {error.image? <p className='errorText'>{error.image}</p>: null}
                <div>
                    
                {allTypes.map((type)=>(
                   <label key={type}>
                    <input
                    type='checkbox'
                    value={type}
                    name={type}
                    onChange={(e)=>{handleChangeCheckbox(e)}}
                    />{type}</label> 
                ))}
                </div>
                                

                <div >                    
                    <button className='buttonAdd' type='submit'>ADD</button>                     
                </div>
            </form>
        </div>
)

       
    
}
