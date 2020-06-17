import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getHealthData } from '../../../actions/authActions';
import WeiStats from '../statistics/WeiStats';
import UpdateWeight from "../inputs/UpdateWeight";

class Weight extends React.Component {

    componentDidMount() {
        this.props.getHealthData()
    }

    render() {
        return (
            <>
                <div className="container fluid ">
                    <Container fluid className="mt-3">
                        <Row>
                            <Col md={{ span: 6, offset: 3 }}>
                                <UpdateWeight />
                            </Col>
                        </Row>
                        <Row>
                            <Col> 
                            <WeiStats />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { getHealthData })(Weight)