import React,{useState} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {getUserWeight,updateUserWeight}  from '../../../actions/caloriesActions'
import {getHealthData, updateHealthData}  from '../../../actions/authActions'

const UpdateWeightForm = () =>{

    const dispatch = useDispatch()
    const [updatedWeight,setUpdatedWeight] = useState(0)
    const onWeightUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserWeight(updatedWeight))
        setUpdatedWeight("")
    }
    return (
        <>
            <Card body className="mt-3">
                <Form onSubmit={onWeightUpdate}>
                    <Form.Group controlId="weight" >
                        <Form.Label><h5 className="text-center">Mon poids aujourd'hui</h5></Form.Label>
                        <Form.Control 
                            as="input" 
                            placeholder="Poids (kg)" 
                            value={updatedWeight}
                            onChange = {(e)=>setUpdatedWeight(e.target.value)}
                            />
                    </Form.Group>
                    <Button type="submit" variant="success" size="sm">Modifier mon poids</Button>
                </Form>
            </Card>
        </>
    )
}

export default UpdateWeightForm