import React from 'react';
import { connect } from 'react-redux';
import { loadLunchList, deleteMeal } from '../../../actions/caloriesActions';
import MealTable from './MealTable';

class Lunch extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.loadLunchList()
    }

    deleteLunch = (meal) => {
        this.props.deleteMeal(meal)

    }
    render() {
        return (
            <>
                <h4 className="text-success">Déjeuner</h4>
                <MealTable
                    mealList={this.props.lunchList}
                    meal_type="LUNCH"
                    onClickTrash={this.deleteLunch}
                />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lunchList: state.nutrition.LUNCH
    }
}

export default connect(mapStateToProps, {
    loadLunchList,
    deleteMeal
})(Lunch)