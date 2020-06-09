import React from 'react'
import {Container,Col,Row,Button} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getProfileData} from '../../../actions/authActions'
import UpdateWeight from '../forms/UpdateWeight'
import UpdateCalorieGoal from '../forms/UpdateCalorieGoal'
import DailyFoodLog from './DailyFoodLog'
import TotalCalories from './TotalCalories'
import Statistics from '../statistics/Statistics'
import WeekAverages from './WeekAverage'



class Dashboard extends React.Component {

    state = {
        hideStatistics:true,
        statsButtonColor:'outline-success',
        foodLogButtonColor:'success'
    }

    componentDidMount(){
        this.props.getProfileData()
    }

    onClickShowStats = () => {
        this.setState({hideStatistics:false,statsButtonColor:'success',foodLogButtonColor:'outline-success'})
    }

    onClickShowFoodLog = () => {
        this.setState({hideStatistics:true,statsButtonColor:'outline-success',foodLogButtonColor:'success'})
    }

    render(){
            return (
                <>
                    <TotalCalories />

                    <Container fluid className="mt-3">

                        <Row className="justify-content-center">
                            <Button variant={this.state.foodLogButtonColor} className="mr-3" onClick={this.onClickShowFoodLog}>
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
                                <DailyFoodLog />
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