import axios from 'axios'
import {
    GET_BREAKFAST,
    GET_CHEAT,
    GET_DINNER,
    GET_LUNCH,
    GET_SNACKS,
    ADD_MEAL,
    EDIT_MEAL,
    DELETE_MEAL,
    GET_CALORIES,
    UPDATE_CALORIES,
    GET_WEIGHT,
    UPDATE_WEIGHT,
    GET_ERRORS
} from './types'

const foodLogUrl = 'http://localhost:8000/api/meal/'
const foodCategoryUrl = 'http://localhost:8000/api/'

export const loadBreakfastList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get(foodCategoryUrl + 'breakfast',config)
    .then(res => {
        dispatch({
            type:GET_BREAKFAST,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const loadLunchList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get(foodCategoryUrl + 'lunch',config)
    .then(res => {
        dispatch({
            type:GET_LUNCH,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const loadDinnerList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get(foodCategoryUrl + 'dinner',config)
    .then(res => {
        dispatch({
            type:GET_DINNER,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const loadSnackList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get(foodCategoryUrl + 'snacks',config)
    .then(res => {
        
        dispatch({
            type:GET_SNACKS,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const loadCheatList = () =>(dispatch,getState) => {
    const config = configureConfig(dispatch,getState)

    axios.get(foodCategoryUrl + 'cheat',config)
    .then(res => {
        dispatch({
            type:GET_CHEAT,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const addMeal = (meal) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify(meal)
    console.log(meal)
    axios.post(foodLogUrl,body,config)
    .then( res => {
        dispatch({
            type:UPDATE_CALORIES,
            payload:res.data
        })
        dispatch({
            type:ADD_MEAL,
            payload:res.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
        
    })
}

export const editMeal = (mealItem,original) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify(mealItem)

    // change between edited item and original
    const daily_calories =  mealItem.daily_calories - original.daily_calories
    const fat = mealItem.fat - original.fat
    const protein =  mealItem.protein - original.protein
    const carbs = mealItem.carbs - original.carbs

    axios.put(foodLogUrl+original.id,body,config)
    .then(res =>{
        dispatch({
            type:EDIT_MEAL,
            payload:res.data
        })
    }).then (
        dispatch({
            type:UPDATE_CALORIES,
            payload:{daily_calories,fat,protein,carbs}
        })
    ).catch(err=>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })

}

export const deleteMeal = (meal) => (dispatch,getState) => {
    const meal_type = meal.meal_type
    const id = meal.id
    const daily_calories = -meal.daily_calories
    const fat = -meal.fat
    const protein = -meal.protein
    const carbs = -meal.carbs
    const config = configureConfig(dispatch,getState)

    axios.delete(foodLogUrl + id,config)
    .then(
        dispatch({
            type:DELETE_MEAL,
            payload:{id,meal_type}
        })
    ).then(
        dispatch({
            type:UPDATE_CALORIES,
            payload:{daily_calories,fat,protein,carbs}
        })
    ).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const getCalories = () => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    axios.get('http://localhost:8000/api/user/total-calories',config)
    .then(res =>{
        dispatch({
            type:GET_CALORIES,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const getUserWeight = () => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    axios.get('http://localhost:8000/api/user/weight',config)
    .then(res =>{
        dispatch({
            type:GET_WEIGHT,
            payload:res.data.weight
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}

export const updateUserWeight = (weight) => (dispatch,getState) => {
    const config = configureConfig(dispatch,getState)
    const body = JSON.stringify({"number":weight})
    axios.post('http://localhost:8000/api/user/weight',body,config)
    .then(res =>{
        console.log(res.data)
        dispatch({
            type:UPDATE_WEIGHT,
            payload:res.data.data
        })
    }).catch(err =>{
        const errors = {
            msg:err.response.data,
            status:err.response.status
        }
        dispatch({
            type:GET_ERRORS,
            payload:errors
        })
    })
}


// helper function
const configureConfig = (dispatch,getState) => {
    const token = getState().auth.token

    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }

    return config
}

