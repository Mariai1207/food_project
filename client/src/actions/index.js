import axios from 'axios';

export function getRecipes() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/recipes')
        return dispatch({
            type: "GET_RECIPES",
            payload: response.data
        })
    }
}

export function getRecipesSearch(title) {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/recipes?name=' + title)
        return dispatch({
            type: "GET_RECIPES",
            payload: response.data
        })
    }
}
export function getTypes() {
    return async function (dispatch) {
        const response = await axios.get('http://localhost:3001/types')
        return dispatch({
            type: "GET_TYPES",
            payload: response.data
        })
    }
}
export function getRecipeDetail(id) {
    // console.log('id desde 'id)
    return async function (dispatch) {
        try {
            var response = await axios.get(`http://localhost:3001/recipes/${id}`)
            console.log('desde action', response.data)
            return dispatch({
                type: "GET_RECIPE_DETAIL",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}
export function filterByTypes(payload) {
    return {
        type: "FILTER_BY_TYPES",
        payload
    }
}
export function filterByOrderAlphabetical(payload) {
    return {
        type: "FILTER_BY_ORDER_ALPHABETICAL",
        payload
    }
}

export function filterByOrderScore(payload) {
    return {
        type: "FILTER_BY_ORDER_SCORE",
        payload
    }
}

export function postRecipe (payload){

    return async function (dispatch){
        const response= await axios.post('http://localhost:3001/recipes', payload)
        
        return dispatch({
            type: "POST_RECIPE",
            payload
        })
    }
    }

