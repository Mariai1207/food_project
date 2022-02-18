const initialState={
    recipes: []
}

const rootReducer =(state=initialState, action) =>{
    switch (action.type){
        case "GET_RECIPES":       
            return {
                ...state,
                recipes: action.payload
            }
        default:
            return state
    }
}
export default rootReducer;