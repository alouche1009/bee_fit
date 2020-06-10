import { CalTypes } from '../constants/actionsTypes'

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
        case CalTypes.GET_BREAKFAST:
            return{
                ...state,
                BREAKFAST:action.payload
            }
        case CalTypes.GET_LUNCH:
            return{
                ...state,
                LUNCH:action.payload
            }
        
        case CalTypes.GET_DINNER:
            return{
                ...state,
                DINNER:action.payload
            }            

        case CalTypes.ADD_MEAL:
            return{
                ...state,
                [action.payload.meal_type]:[...state[action.payload.meal_type],action.payload]
            }

        case CalTypes.DELETE_MEAL:
           return {
               ...state,
               [action.payload.meal_type]: state[action.payload.meal_type].filter(meal => meal.id !== action.payload.id)
           }

        case CalTypes.EDIT_MEAL:
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

        case CalTypes.GET_CALORIES:
            return {
                ...state,
                calories:{
                    total:action.payload.totalCalories,
                    fat:action.payload.fatCalories,
                    protein:action.payload.proteinCalories,
                    carbs:action.payload.carbsCalories
                }
            }

        case CalTypes.UPDATE_CALORIES:
            return {
                ...state,
                calories:{
                    total:state.calories.total + action.payload.daily_calories,
                    fat:state.calories.fat + action.payload.fat,
                    protein:state.calories.protein + action.payload.protein,
                    carbs:state.calories.carbs + action.payload.carbs
                }
            }
        case CalTypes.GET_WEIGHT:
        case CalTypes.UPDATE_WEIGHT:
            return {
                ...state,
                user_weight:action.payload
            }

        default:
            return state
    }
}