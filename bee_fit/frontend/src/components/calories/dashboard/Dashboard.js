import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getHealthData } from '../../../actions/authActions';
import DailyMeal from './DailyMeal';
import TotalCalories from './TotalCalories';
import CalStats from '../statistics/CalStats';

class Dashboard extends React.Component {

    state = {
        hideStatistics: true,
        statsButtonColor: 'btn btn-outline-primary',
        mealLogButtonColor: 'btn btn-primary'
    }

    componentDidMount() {
        this.props.getHealthData()
    }

    onClickShowStats = () => {
        this.setState({ hideStatistics: false, statsButtonColor: 'btn btn-primary', mealLogButtonColor: 'btn btn-outline-primary' })
    }

    onClickShowMealLog = () => {
        this.setState({ hideStatistics: true, statsButtonColor: 'btn btn-outline-primary', mealLogButtonColor: 'btn btn-primary' })
    }

    render() {
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
                            <CalStats />}
                    </Row>
                </Container>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getHealthData })(Dashboard)