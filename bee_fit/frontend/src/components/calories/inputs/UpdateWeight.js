import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateUserWeight } from '../../../actions/caloriesActions';

const UpdateWeightForm = () => {

    const dispatch = useDispatch()
    const [updatedWeight, setUpdatedWeight] = useState(0)
    const onWeightUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUserWeight(updatedWeight))
        setUpdatedWeight("")
    }
    return (
        <>
            <Card body className="text-center">
                <Form onSubmit={onWeightUpdate}>
                    <Form.Group controlId="weight" >
                        <Form.Label className="text-center"><h5>Mon poids aujourd'hui</h5></Form.Label>
                        <Form.Control
                            as="input"
                            placeholder="Poids (kg)"
                            value={updatedWeight}
                            onChange={(e) => setUpdatedWeight(e.target.value)}
                            className="text-center"
                        />
                    </Form.Group>
                    <Button type="submit" variant="btn btn-primary" size="sm">Modifier mon poids</Button>
                </Form>
            </Card>
        </>
    )
}

export default UpdateWeightForm