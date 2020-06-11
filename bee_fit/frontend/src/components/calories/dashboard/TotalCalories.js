import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getCalories } from '../../../actions/caloriesActions';
import { Doughnut } from 'react-chartjs-2';
import UpdateCalorieGoal from '../inputs/UpdateCalorieGoal';

const TotalCalories = () => {
    const auth = useSelector(state => state.auth)
    const total = useSelector(state => state.calories.calories)
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(getCalories())
        }

    }, [])

    const dataSet = {
        labels: ['Lipides', 'Protéines', 'Glucides'],
        datasets: [
            {
                label: 'Apports nutritionnels',
                backgroundColor: [
                    '#FFC107',
                    '#E91E63',
                    '#03A9F4',
                ],
                data: [Math.trunc((total.fat) * 100 / (total.protein + total.fat + total.carbs)), Math.trunc((total.protein) * 100 / (total.protein + total.fat + total.carbs)), Math.trunc((total.carbs) * 100 / (total.protein + total.fat + total.carbs))]
            }
        ]

    }

    const dataOMS = {
        labels: ['Lipides', 'Protéines', 'Glucides'],
        datasets: [
            {
                label: 'Apports nutritionnels',
                backgroundColor: [
                    '#FFC107',
                    '#E91E63',
                    '#03A9F4',
                ],
                data: [30, 20, 50]
            }
        ]

    }

    return (
        <>
            <div className="container fluid">
                <Container>
                    <Row>
                        <Col body className="text-center">
                            <Card body className="mt-3 text-center">
                                <h4>Mon objectif calories</h4>
                                {total.total <= auth.userCalorieGoal.daily_calories ?
                                    <strong><h6 style={{ color: '#52c6b9', fontWeight: 'bold' }}>{total.total ? total.total : 0}</h6></strong>
                                    : <strong><h6 style={{ color: 'red', fontWeight: 'bold' }}>{total.total ? total.total : 0}</h6></strong>
                                }
                               <strong> <hr style={{ width: "4rem", fontWeight: 'bold'}} /></strong>
                                {total.total <= auth.userCalorieGoal.daily_calories ?
                                    <strong><h6 style={{ color: '#52c6b9', fontWeight: 'bold' }}>{auth.userCalorieGoal.daily_calories}</h6></strong>
                                    :
                                    <strong> <h6 style={{ color: 'red', fontWeight: 'bold' }}>{auth.userCalorieGoal.daily_calories}</h6></strong>
                                }
                            </Card>
                        </Col>
                        <Col body className="text-center">
                            <UpdateCalorieGoal />
                        </Col>
                    </Row>
                    <Col>
                        <Card body className="border-0">
                            <Row>
                                <Col>
                                    <Doughnut
                                        data={dataSet}
                                        height={300}
                                        options={{
                                            title: {
                                                display: true,
                                                text: "Ma consommation du jour (en %)",
                                                fontSize: 20

                                            },
                                            legend: {
                                                display: true,
                                                position: 'bottom'
                                            },
                                            maintainAspectRatio: false
                                        }}
                                    />
                                </Col>
                                <Col>
                                    <Doughnut
                                        data={dataOMS}
                                        height={300}
                                        options={{
                                            title: {
                                                display: true,
                                                text: "Les recommendations de l'OMS (en %)",
                                                fontSize: 20

                                            },
                                            legend: {
                                                display: true,
                                                position: 'bottom'
                                            },
                                            maintainAspectRatio: false
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Container>
            </div>
        </>
    )
}

export default TotalCalories