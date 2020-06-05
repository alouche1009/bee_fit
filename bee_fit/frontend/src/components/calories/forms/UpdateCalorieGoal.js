import React,{useState} from 'react'
import {Card,Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {getUserWeight,updateUserWeight}  from '../../../actions/nutrition'
import {getProfileData,updateProfileData}  from '../../../actions/auth'

const UpdateWeightForm = () =>{
    
    const dispatch = useDispatch()
    const [updatedCalorieGoal,setCalorieGoal] = useState(0)
    const onCalorieUpdate = (e) => {
        e.preventDefault()
        dispatch(updateProfileData(updatedCalorieGoal))
        setCalorieGoal("")
    }
    return (
        <>
            <Card body className="mt-3">
                <Form onSubmit={onCalorieUpdate}>
                    <Form.Group controlId="calorie-goal">
                        <Form.Label><h5 className="text-center">Mon objectif calories</h5></Form.Label>
                        <Form.Control 
                            as="input" 
                            placeholder="calories (kcal)"
                            value={updatedCalorieGoal}
                            onChange = {(e)=>setCalorieGoal(e.target.value)}
                            />
                            
                    </Form.Group>
                    <Button type="submit" variant="success" size="sm">Modifier mon objectif calories</Button>
                </Form>
            </Card>
        </>
    )
}

export default UpdateWeightForm