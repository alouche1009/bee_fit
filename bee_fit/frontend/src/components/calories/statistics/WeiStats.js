import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';

function convertToWeightDataSet(arr) {
    var xLabel;
    var yLabel;
    xLabel = arr.map(p => p.date_recorded)
    yLabel = arr.map(p => p.number)
    const dataSet = {
        labels: xLabel,
        datasets: [
            {
                label: 'Poids (kg)',
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

const WeiStats = () => {
    const auth = useSelector(state => state.auth)
    const [weightLineState, updateWeightLineState] = useState()
    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${auth.token}`
            }
        }
        axios.get('http://localhost:8000/api/user/30-day-weight', config)
            .then(res => {
                updateWeightLineState(convertToWeightDataSet(res.data.data))
            })

    }, [])

    return (
        <>
                <Container className="mt-3">
                    <Row>
                        <Col>
                            <Line
                                data={weightLineState}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Suivi pondéral',
                                        fontSize: 20,
                                    },
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
        </>
    )
}

export default WeiStats