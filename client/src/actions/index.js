 
 
 export function getRecipes (){

    return  function (dispatch){
         fetch('http://localhost:3001/recipes')   
         .then(r=> r.json())
        .then(json=>{
            return dispatch 
        ({
            type: "GET_RECIPES", 
            payload: json
        }) 
        })
       // console.log('getrecipes' + json)     
        
}
   /*
        return {
            type: "GET_RECIPES", 
            payload: 'se cargaron todas las recetas'
        }*/


    
    
}