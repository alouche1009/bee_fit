import React from 'react';
import Breakfast from './Breakfast';
import Dinner from './Dinner';
import Lunch from './Lunch';

class DailyMeal extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <>
                <Breakfast />
                <Lunch />
                <Dinner />
            </>
        )
    }
}

export default DailyMeal