const initialState={
    recipes: [],
    allRecipes:[],
    types: [],
    recipeId:{}
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
            if(action.payload==='no se encontró receta'){
            console.log('no se encontró receta')
                return state 
            }
            
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
          
       
       
        case "FILTER_BY_ORDER":
          console.log(action.payload)
            var nameRecipes=state.allRecipes.map(x =>x)
           if((action.payload=== 'A-Z')){

               console.log(state.allRecipes)
            nameRecipes.sort(function(a,b){
                var nameA = a.title.toUpperCase(); // ignore upper and lowercase
                var nameB = b.title.toUpperCase(); // ignore upper and lowercase
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
              
                // names must be equal
                return 0;
            });
            console.log(nameRecipes)
           }
            return{
                ...state,
                recipes: nameRecipes,
                allRecipes: nameRecipes
            }

          

        default:
            return state
    }
}
export default rootReducer;