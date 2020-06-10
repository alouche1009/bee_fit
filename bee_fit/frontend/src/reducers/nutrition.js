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
    UPDATE_WEIGHT
    
} from '../actions/types'

const initialState = {
    BREAKFAST:[],
    LUNCH:[],
    DINNER:[],
    calories:{
        total:0,
        fat:0,
        protein:0,
        carbs:0
    },
    user_weight:0
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_BREAKFAST:
            return{
                ...state,
                BREAKFAST:action.payload
            }
        case GET_LUNCH:
            return{
                ...state,
                LUNCH:action.payload
            }
        
        case GET_DINNER:
            return{
                ...state,
                DINNER:action.payload
            }            

        case ADD_MEAL:
            return{
                ...state,
                [action.payload.meal_type]:[...state[action.payload.meal_type],action.payload]
            }

        case DELETE_MEAL:
           return {
               ...state,
               [action.payload.meal_type]: state[action.payload.meal_type].filter(meal => meal.id !== action.payload.id)
           }

        case EDIT_MEAL:
            return {
                ...state,
                [action.payload.meal_type]: state[action.payload.meal_type].map(meal =>{
                    if (meal.id !== action.payload.id){
                        return meal
                    } else {
                        return {
                            ...meal,
                            ...action.payload
                        }
                    }
                })
            }

        case GET_CALORIES:
            return {
                ...state,
                calories:{
                    total:action.payload.totalCalories,
                    fat:action.payload.fatCalories,
                    protein:action.payload.proteinCalories,
                    carbs:action.payload.carbsCalories
                }
            }

        case UPDATE_CALORIES:
            return {
                ...state,
                calories:{
                    total:state.calories.total + action.payload.daily_calories,
                    fat:state.calories.fat + action.payload.fat,
                    protein:state.calories.protein + action.payload.protein,
                    carbs:state.calories.carbs + action.payload.carbs
                }
            }
        case GET_WEIGHT:
        case UPDATE_WEIGHT:
            return {
                ...state,
                user_weight:action.payload
            }

        default:
            return state
    }
}