import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

function convertToDataSet(arr) {
    var xLabel;
    var yLabel;
    xLabel = arr.map(p => p.dayDate)
    yLabel = arr.map(p => p.totalCalories)
    const dataSet = {
        labels: xLabel,
        datasets: [
            {
                label: 'Calories',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(83, 217, 141,1)',
                borderColor: 'rgba(83, 217, 141,1)',
                borderWidth: 2,
                data: yLabel
            }
        ]
    }
    return dataSet
}

const CalStats = () => {
    const auth = useSelector(state => state.auth)
    const [calorieLineState, updateCalorieLineState] = useState()
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${auth.token}`
            }
        }
        axios.get('http://localhost:8000/api/30-day-calories', config)
            .then(res => {
                updateCalorieLineState(convertToDataSet(res.data.data))

            })

    }, [])

    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Line
                            data={calorieLineState}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Suivi calorique',
                                    fontSize: 20,
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                }
                            }}
                        />
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}

export default CalStats