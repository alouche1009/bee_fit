import React from 'react';
import CreateMeal from '../inputs/CreateMeal';
import { Table } from 'react-bootstrap';
import AddItem from './AddItem';


const MealTable = (props) => {

    const renderMealList = (mealList) => {
        return mealList.map(meal => {
            return (
                <>
                    <AddItem
                        meal={meal}
                        onClickTrash={props.onClickTrash}
                    />
                </>
            )
        })
    }

    return (
        <>
            <Table striped bordered hover responsive size="sm">
                <thead>
                    <tr>
                        <th>🛒 Produit</th>
                        <th>📈 Calories</th>
                        <th>🧈 Lipides</th>
                        <th>🥩 Protéines</th>
                        <th>🍞 Glucides</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CreateMeal meal_type={props.meal_type} />
                    {renderMealList(props.mealList)}
                </tbody>
            </Table>
        </>
    )
}

export default MealTable