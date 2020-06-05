import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getCalories } from '../../../actions/nutrition'
import { Doughnut } from 'react-chartjs-2'
import UpdateCalorieGoal from '../forms/UpdateCalorieGoal'
import UpdateWeight from "../forms/UpdateWeight"
const TotalCalories = () => {
    const auth = useSelector(state => state.auth)
    const total = useSelector(state => state.nutrition.calories)
    const dispatch = useDispatch()

    useEffect(() => {
        if (auth.isAuthenticated) {
            dispatch(getCalories())
        } else {
            console.log("Nah")
        }

    }, [])

    const dataSet = {
        labels: ['Lipides', 'Protéines', 'Glucides'],
        datasets: [
            {
                label: 'Calorie breakdown',
                backgroundColor: [
                    '#FBF114',
                    '#FB3714',
                    '#CB0EDB',
                ],
                data: [total.fat, total.protein, total.carbs]
            }
        ]

    }

    return (
        <>
            <Container fluid className="mt-3">
                <Row>

                    <Col>
                        <Card body className="text-center">
                        <Card body className="mt-3">
                            <h4>Mon objectif calories</h4>
                            <h6>{total.total ? total.total : 0}</h6>
                            <hr style={{ width: "4rem" }} />
                            <h6>{auth.userCalorieGoal.daily_calories}</h6>
                            </Card>
                        </Card>
                    </Col>
                    <Col>
                        <Card body className="text-center">
                            <UpdateWeight />
                        </Card>
                    </Col>
                    <Col >
                        <Card body className="text-center">
                            <UpdateCalorieGoal />
                        </Card>
                    </Col>
                    </Row>
                    <Col>
                        <Card body className="border-0">
                            <Row>
                                <Doughnut
                                    data={dataSet}
                                    height={200}
                                    options={{
                                        title: {
                                            display: true,
                                            text: "Ma consommation du jour",
                                            fontSize: 20

                                        },
                                        legend: {
                                            display: true,
                                            position: 'bottom'
                                        },
                                        maintainAspectRatio: false
                                    }}


                                />
                            </Row>
                        </Card>
                    </Col>
            </Container>
        </>
    )
}

export default TotalCalories