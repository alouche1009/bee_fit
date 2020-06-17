import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editMeal } from '../../../actions/caloriesActions';
import { Form, Button } from 'react-bootstrap';

const EditMeal = (props) => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        name: props.meal.name,
        daily_calories: props.meal.daily_calories,
        fat: props.meal.fat,
        protein: props.meal.protein,
        carbs: props.meal.carbs,
        meal_type: props.meal.meal_type,
    })

    const original = {
        daily_calories: props.meal.daily_calories,
        fat: props.meal.fat,
        protein: props.meal.protein,
        carbs: props.meal.carbs,
        id: props.meal.id
    }

    const submitMeal = (e) => {
        e.preventDefault()
        dispatch(editMeal(formData, original))
        props.onClickCancel()
    }

    const updateMealInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <tr>
            <td>
                <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Enter meal name" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control id="daily_calories" size="sm" type="totalCalories" value={formData.daily_calories} placeholder="Total Calories" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Fat (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Protein (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Carbs (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Button variant="succebtn btn-primary" type="submit" size="sm" onClick={submitMeal}>
                    Modifier
                </Button>

                <Button variant="danger" size="sm" onClick={() => props.onClickCancel(original)}>
                    Annuler
                </Button>
            </td>
        </tr>


    )
}

export default EditMeal