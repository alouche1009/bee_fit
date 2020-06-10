import React from 'react'
import {Container,Col,Row,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getProfileData} from '../../../actions/authActions'
import UpdateWeight from '../forms/UpdateWeight'
import UpdateCalorieGoal from '../forms/UpdateCalorieGoal'
import DailyMeal from './DailyMeal'
import TotalCalories from './TotalCalories'
import Statistics from '../statistics/Statistics'
import WeekAverages from './WeekAverage'



class Dashboard extends React.Component {

    state = {
        hideStatistics:true,
        statsButtonColor:'outline-success',
        mealLogButtonColor:'success'
    }

    componentDidMount(){
        this.props.getProfileData()
    }

    onClickShowStats = () => {
        this.setState({hideStatistics:false,statsButtonColor:'success',mealLogButtonColor:'outline-success'})
    }

    onClickShowMealLog = () => {
        this.setState({hideStatistics:true,statsButtonColor:'outline-success',mealLogButtonColor:'success'})
    }

    render(){
            return (
                <>
                    <TotalCalories />

                    <Container fluid className="mt-3">

                        <Row className="justify-content-center">
                            <Button variant={this.state.mealLogButtonColor} className="mr-3" onClick={this.onClickShowMealLog}>
                                Mes calories du jour
                            </Button>

                            <Button variant={this.state.statsButtonColor} onClick={this.onClickShowStats}>
                                Mon suivi mensuel
                            </Button>
                        </Row>

                        <Row>
                            
                            {this.state.hideStatistics ? 
                            <>
                            <Col md={{ span: 8, offset: 2 }}>
                                <DailyMeal />
                            </Col>
                          </> : 
                          <Statistics /> }
                        </Row>
                    </Container>
                </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        auth:state.auth
    }
}

export default connect(mapStateToProps,{getProfileData})(Dashboard)