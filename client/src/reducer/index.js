const initialState={
    recipes: [],
    allRecipes:[],
    types: [],
    recipeId:{},
    statusAddRecipe:''
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
       
       
        case "FILTER_BY_ORDER_ALPHABETICAL":          
           var nameRecipes=state.allRecipes.map(x =>x)
           if((action.payload=== 'A-Z')){            
                nameRecipes.sort(function(a,b){
                var nameA = a.title.toUpperCase(); 
                var nameB = b.title.toUpperCase(); 
                if (nameA < nameB) {
                  return -1;
                }
                if (nameA > nameB) {
                  return 1;
                }
                return 0;
            });           
           }else if(action.payload==='Z-A'){
            nameRecipes.sort(function(a,b){
                var nameA = a.title.toUpperCase(); 
                var nameB = b.title.toUpperCase(); 
                if (nameA < nameB) {
                  return 1;
                }
                if (nameA > nameB) {
                  return -1;
                }
                return 0;
            });
           }
            return{
                ...state,
                recipes: nameRecipes,
                allRecipes: nameRecipes
            }

        case 'FILTER_BY_ORDER_SCORE':
            var scoreRecipes=state.allRecipes.map(x =>x)
            if((action.payload=== 'max-min')){      
                scoreRecipes.sort((a,b)=> b.spoonacularScore -a.spoonacularScore)
            } else if(action.payload==='min-max'){
                scoreRecipes.sort((a,b)=> a.spoonacularScore -b.spoonacularScore)
            }
             return {
                ...state,
                recipes: scoreRecipes,
                allRecipes: scoreRecipes
            }
        
        
        case "POST_RECIPE": 
            return{
                ...state,
                statusAddRecipe: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;