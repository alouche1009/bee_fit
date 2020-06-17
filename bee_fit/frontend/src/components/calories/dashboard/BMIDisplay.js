import React, { Component } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

class BMIDisplay extends Component {
    render() {
        let height = this.props.data.height;
        let weight = this.props.data.weight;
        let bmi = this.props.data.bmi;
        let bmiClass = this.props.data.bmiClass;

        return (
            <div className="container fluid text-center p-top-perso">
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <h3>
                            Taille: {height} cm
        </h3>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <h3>
                            Poids: {weight} kg
        </h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 3, offset: 3 }}>
                        <h3>IMC: {bmi}</h3>
                    </Col>
                    <Col md={{ span: 3 }}>
                        <h3>{bmiClass}</h3>
                    </Col>
                </Row>
                <img
                    src="../../../static/frontend/images/imc.png"
                    class="img-fluid p-top-perso"
                    alt="Responsive image"
                    style={{ width: '75%' }}
                />
            </div>
        );
    }
}

export default BMIDisplay
