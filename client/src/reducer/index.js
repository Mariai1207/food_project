const initialState={
    recipes: [],
    allRecipes:[],
    types: [],
    recipeId:{},
    lastRecipe:{},
}

const rootReducer =(state=initialState, action) =>{
    switch (action.type){
        case "GET_RECIPES":    
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload,
                lastRecipe:action.payload[action.payload.length-1]
            }
        case "GET_RECIPES_SEARCH":
            console.log(action.payload)
            if(!action.payload.length){
                alert('recipe not found')
                return{
                     ...state,   
                }
            }else{
                return{
                    ...state,
                    recipes: action.payload
                }
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
            if(action.payload==='all'||action.payload==='default' ) {
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
           if(action.payload==='default'){
               nameRecipes=state.allRecipes
           }
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
               
            }

        case 'FILTER_BY_ORDER_SCORE':
            var scoreRecipes=state.allRecipes.map(x =>x)
            if(action.payload==='default'){
                scoreRecipes=state.allRecipes
            }
            if((action.payload=== 'max-min')){      
                scoreRecipes.sort((a,b)=> b.spoonacularScore -a.spoonacularScore)
            } else if(action.payload==='min-max'){
                scoreRecipes.sort((a,b)=> a.spoonacularScore -b.spoonacularScore)
            }
             return {
                ...state,
                recipes: scoreRecipes,
                
            }
        
        
        case "POST_RECIPE": 
            return{
                ...state,
                
            }

      
              
        default:
            return state
    }
}
export default rootReducer;