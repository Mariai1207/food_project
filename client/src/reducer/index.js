const initialState={
    recipes: [],
    types: []
}

const rootReducer =(state=initialState, action) =>{
    switch (action.type){
        case "GET_RECIPES":       
            return {
                ...state,
                recipes: action.payload
            }
        case "GET_TYPES":
            return {
                ...state,
                types: action.payload
            }
        case "FILTER_BY_TYPES":
            // filtrar las recetas que coincidan con el payload(tipo de dieta)
            // allRecipes.filter(recipe=> )
            const allRecipes= state.recipes
           // const filterByTypes // las recetas filtradas
           // otra opcion es que llegue filtrada desde el back? creando nuevas props en el statdo?
           /* return{
                ...state,
                recipes: filterByTypes 
            }*/
            // el problema es que se modifica el estado para siempre, para volver a filtrar se tomaria un estado ya filtrado
        case "FILTER_BY_ORDER":
            // ordenamiento 
            // puede ser con switch(dependiendo del calor se ordena de ua manera diferente)
            // desde el back?
            return{

            }
            default:
            return state
    }
}
export default rootReducer;