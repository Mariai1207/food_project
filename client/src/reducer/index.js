const initialState={
    recipes: [],
    allRecipes:[],
    types: [],
    recipeId:[]
}

const rootReducer =(state=initialState, action) =>{
    switch (action.type){
        case "GET_RECIPES":       
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case "GET_RECIPES_SEARCH":
            return{
                ...state,
                recipes: action.payload,
                allRecipes: action.payload            
            }
        case "GET_TYPES":
            return {
                ...state,
                types: action.payload
            }
        case "GET_RECIPE_DETAIL":
            console.log('desde el reducer',action.payload)
            return {
                ...state,
                recipeId: action.payload
            }
        case "FILTER_BY_TYPES":         
            let filterByTypes=[]
            if(action.payload==='all') {
               filterByTypes =state.allRecipes 
            } else{
                filterByTypes = state.allRecipes.filter(recipe=>recipe.diets.includes(action.payload))     
            } 
                             
          return{
                ...state,
                recipes:filterByTypes
            }
          
       
       
            //case "FILTER_BY_ORDER":
            // ordenamiento 
            // puede ser con switch(dependiendo del valor se ordena de ua manera diferente)
            // desde el back?
           // return{

          //  }
            default:
            return state
    }
}
export default rootReducer;