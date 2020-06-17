import axios from 'axios';
import { CalTypes } from '../constants/actionsTypes';
import { CalUrls } from '../constants/urls';
import { returnErrors } from './messagesActions';

export const loadBreakfastList = () => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)

    axios.get(CalUrls.GET_BREAKFAST, config)
        .then(res => {
            dispatch({
                type: CalTypes.GET_BREAKFAST,
                payload: res.data.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const loadLunchList = () => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)

    axios.get(CalUrls.GET_LUNCH, config)
        .then(res => {
            dispatch({
                type: CalTypes.GET_LUNCH,
                payload: res.data.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const loadDinnerList = () => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)

    axios.get(CalUrls.GET_DINNER, config)
        .then(res => {
            dispatch({
                type: CalTypes.GET_DINNER,
                payload: res.data.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const addMeal = (meal) => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)
    const body = JSON.stringify(meal)
   
    axios.post(CalUrls.ADD_MEAL, body, config)
        .then(res => {
            dispatch({
                type: CalTypes.UPDATE_CALORIES,
                payload: res.data
            })
            dispatch({
                type: CalTypes.ADD_MEAL,
                payload: res.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const editMeal = (mealItem, original) => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)
    const body = JSON.stringify(mealItem)
    const daily_calories = mealItem.daily_calories - original.daily_calories
    const fat = mealItem.fat - original.fat
    const protein = mealItem.protein - original.protein
    const carbs = mealItem.carbs - original.carbs

    axios.put(CalUrls.EDIT_MEAL + original.id, body, config)
        .then(res => {
            dispatch({
                type: CalTypes.EDIT_MEAL,
                payload: res.data
            })
        })
        .then(
            dispatch({
                type: CalTypes.UPDATE_CALORIES,
                payload: { daily_calories, fat, protein, carbs }
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });


}

export const deleteMeal = (meal) => (dispatch, getState) => {
    const meal_type = meal.meal_type
    const id = meal.id
    const daily_calories = -meal.daily_calories
    const fat = -meal.fat
    const protein = -meal.protein
    const carbs = -meal.carbs
    const config = configureConfig(dispatch, getState)

    axios.delete(CalUrls.DELETE_MEAL + id, config)
        .then(
            dispatch({
                type: CalTypes.DELETE_MEAL,
                payload: { id, meal_type }
            })
        )
        .then(
            dispatch({
                type: CalTypes.UPDATE_CALORIES,
                payload: { daily_calories, fat, protein, carbs }
            })
        )
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const getCalories = () => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)
    
    axios.get(CalUrls.GET_CALORIES, config)
        .then(res => {
            dispatch({
                type: CalTypes.GET_CALORIES,
                payload: res.data.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const getUserWeight = () => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)
    
    axios.get(CalUrls.GET_WEIGHT, config)
        .then(res => {
            dispatch({
                type: CalTypes.GET_WEIGHT,
                payload: res.data.weight
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

export const updateUserWeight = (weight) => (dispatch, getState) => {
    const config = configureConfig(dispatch, getState)
    const body = JSON.stringify({ "number": weight })
    
    axios.post(CalUrls.UPDATE_WEIGHT, body, config)
        .then(res => {
            dispatch({
                type: CalTypes.UPDATE_WEIGHT,
                payload: res.data.data
            })
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });

}

const configureConfig = (dispatch, getState) => {
    const token = getState().auth.token
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    if (token) {
        config.headers['Authorization'] = `Token ${token}`
    }
    return config
}

