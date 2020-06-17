import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMeal } from '../../../actions/caloriesActions';
import { Form, Col, Row, Button } from 'react-bootstrap';

const CreateMeal = (props) => {

    const [formData, setFormData] = useState({
        name: "",
        daily_calories: "",
        fat: "",
        protein: "",
        carbs: "",
        meal_type: props.meal_type
    })

    const dispatch = useDispatch()

    const submitMeal = (e) => {
        e.preventDefault()
        dispatch(addMeal(formData))

        setFormData({
            name: "",
            daily_calories: "",
            fat: "",
            protein: "",
            carbs: "",
            meal_type: props.meal_type
        })
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
                <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Produit" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control id="daily_calories" size="sm" type="totalCalories" value={formData.daily_calories} placeholder="Calories" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Lipides (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Protéines (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td>
                <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Glucides (g)" onChange={(e) => updateMealInput(e)} />
            </td>
            <td style={{ width: "6rem" }}>
                <Button style={{ width: "5rem" }} variant="btn btn-primary" type="submit" size="sm" onClick={submitMeal}>
                    Ajouter
                        </Button>
            </td>

        </tr>

    )
}

export default CreateMeal