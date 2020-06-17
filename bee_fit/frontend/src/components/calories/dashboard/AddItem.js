import React, { useState } from 'react';
import EditMeal from '../inputs/EditMeal';

const AddItem = (props) => {
    const [isShown, setIsShown] = useState(true)

    const onClickEdit = (meal) => {
        setIsShown(!isShown)
    }

    const onClickCancel = () => {
        setIsShown(!isShown)
    }

    return (
        <>
            {isShown ? <tr key={props.meal.key}>
                <td>{props.meal.name}</td>
                <td>{props.meal.daily_calories}</td>
                <td>{props.meal.fat}</td>
                <td>{props.meal.protein}</td>
                <td>{props.meal.carbs}</td>
                <td>
                    <button onClick={() => props.onClickTrash(props.meal)} style={{ border: "none", background: "none" }}><i class="fas fa-trash-alt"></i></button>
                    <button onClick={() => onClickEdit(props.meal)} style={{ border: "none", background: "none" }}><i class="fas fa-edit"></i></button>
                </td>
            </tr> : <EditMeal meal={props.meal} onClickCancel={onClickCancel} />}
        </>
    )
}

export default AddItem