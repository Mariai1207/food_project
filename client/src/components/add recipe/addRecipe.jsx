import {React, useState} from 'react';

import './addRecipe.css';
 // me cambia el estado ( desde compoente), si imprimo el state me manda error
export function AddRecipe(){
    const [state, setState]= useState({
        name: '', 
        sumary: '',
        score: '',
        healthScore:'',
        steps: []
    })
    function nameInputChange(e){
        setState({...state, name: e.target.value})
    }
    function sumaryInputChange (e){
        setState({...state, sumary: e.target.value})
    }
    function scoreInputChange (e){
        setState({...state, score: e.target.value})
    }
    function healthScoreInputChange(e){
        setState({...state, healthScore: e.target.value})
    }
    function stepsInputChange(e){
        setState({...state, steps: e.target.value})
    }
    function alert(){
        alert (state)
    }




    let steps =[] // va quedando un arreglo de valores de input
    function InputChange(e){
      let step= e.target.value      
    }
    function addStep(step){
        steps.push(step)
      }

    return(
        <div>
            <h2>add recipe component</h2>
            <form onSubmit={(e) =>{
                e.preventDefault()
                alert()
            }}>
                <div className='position'>
                    <label >Name</label>       
                </div>
                <input size={100} name="name" onChange={(e)=>nameInputChange(e)} />  

                <div className='position'>   
                    <label>Sumary</label>       
                </div> 
                <textarea cols={98} name="sumary" onChange={(e)=>sumaryInputChange(e)}></textarea>

                <div className='position'>
                    <label >Score</label>        
                </div>
                <input  size={100} name="score" onChange={(e)=>scoreInputChange(e)}/>
      
                <div className='position'>
                    <label>healthScore</label>        
                </div>
                <input  size={100} name="healthScore" onChange={(e)=>healthScoreInputChange(e)}/>
     
                <div className='position'>
                    <label>Steps</label>        
                </div>
                <input  size={100} name="steps" onChange={(e)=>stepsInputChange(e)}/>
     



                <div className='position'>
                    <form onSubmit={(e)=>{
                        e.preventDefault();
                        addStep()
                    }}>
                         <label>Steps</label>  
                         <input  size={100} name="steps" onChange={(e)=>InputChange(e)}/>
                         <button type='submit'>ADD STEP</button> 
                    </form>
                </div>

                <div className='position'>
                    <button type='submit'>ADD</button> 
                </div>
            </form>
 {/* cuando se agrega la receta se hace un post para agregarlo a la db */}
        </div>
)

       
    
}