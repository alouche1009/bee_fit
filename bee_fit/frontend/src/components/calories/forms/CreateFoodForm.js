import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addFood} from '../../../actions/calories'
import {Form,Col,Row,Button} from 'react-bootstrap'

const CreateFoodForm = (props) => {
    
    const [formData,setFormData] = useState({
        name:"",
        total_calories:"",
        fat:"",
        protein:"",
        carbs:"",
        category:props.category
    })

    const dispatch = useDispatch()

    const submitFood = (e) => {
        e.preventDefault()
        dispatch(addFood(formData))

        setFormData({
            name:"",
            total_calories:"",
            fat:"",
            protein:"",
            carbs:"",
            category:props.category
        })
    }

    const updateFoodInput = (e) => {
        setFormData({
            ...formData,
            [e.target.id]:e.target.value
        })
    }

    return (
            <tr> 
                    <td>
                        <Form.Control size="sm" id="name" type="name" value={formData.name} placeholder="Produit" onChange={(e) => updateFoodInput(e)}/> 
                    </td>

                    <td>
                        <Form.Control id="total_calories" size="sm" type="totalCalories" value={formData.total_calories} placeholder="Calories" onChange={(e) => updateFoodInput(e)}/> 
                    </td>

                    <td>    
                        <Form.Control id="fat" size="sm" type="fat" value={formData.fat} placeholder="Lipides (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td>
                        <Form.Control size="sm" id="protein" type="protein" value={formData.protein} placeholder="Protéines (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td>
                        <Form.Control size="sm" id="carbs" type="carbs" value={formData.carbs} placeholder="Glucides (g)" onChange={(e) => updateFoodInput(e)}/>
                    </td>

                    <td  style={{width:"6rem"}}>
                        <Button style={{width:"5rem"}} variant="success" type="submit" size="sm" onClick={submitFood}>
                            Ajouter
                        </Button>    
                    </td>
                
            </tr>

    )
}

export default CreateFoodForm