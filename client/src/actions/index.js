 
 
 export function getRecipes (title){
 console.log(title)
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
    }    
}

export function getTypes (){

    return  function (dispatch){        
         fetch('http://localhost:3001/types')   
         .then(r=> r.json())
        .then(json=>{
            return dispatch 
        ({
            type: "GET_TYPES", 
            payload: json
        }) 
        })
    }
     
    
}
export function filterByTypes (payload){
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}
export function filterByOrder (payload){
    return {
        type: "FILTER_BY_ORDER",
        payload
    }
}
