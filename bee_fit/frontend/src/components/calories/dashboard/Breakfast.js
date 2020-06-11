import React from 'react';
import { connect } from 'react-redux';
import MealTable from './MealTable';
import { loadBreakfastList, deleteMeal } from '../../../actions/caloriesActions';


class Breakfast extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.loadBreakfastList()
    }

    deleteBreakfast = (meal) => {
        this.props.deleteMeal(meal)
    }
    
    render(){
        return (
            <>
                <h4>Petit déjeuner</h4>
                <MealTable 
                    mealList = {this.props.breakfastList}
                    meal_type="BREAKFAST"
                    onClickTrash = {this.deleteBreakfast}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breakfastList: state.calories.BREAKFAST
    }
}

export default connect(mapStateToProps,{
    loadBreakfastList,
    deleteMeal
})(Breakfast)