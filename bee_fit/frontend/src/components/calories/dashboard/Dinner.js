import React from 'react'
import {connect} from 'react-redux'
import {loadDinnerList, deleteMeal} from '../../../actions/calories'
import MealTable from './MealTable'

class Dinner extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.loadDinnerList()
    }

    deleteDinner = (meal) => {
        this.props.deleteMeal(meal)
        
    }
    render(){
        return (
            <>
                <h4 className="text-success">Diner</h4>
                <MealTable 
                    mealList = {this.props.dinnerList}
                    meal_type="DINNER"
                    onClickTrash={this.deleteDinner}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dinnerList:state.nutrition.DINNER
    }
}
export default connect(mapStateToProps,{
    loadDinnerList,
    deleteMeal
})(Dinner)