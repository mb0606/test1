import React from 'react';
import { Row, Col } from 'react-bootstrap';


function Home() {
    return (
        <React.Fragment>
            <Row>
                <Col xs={6}>
                    <h1>Notes</h1>
                </Col>
                <Col xs={6}>
                    <h1>Notes</h1>
                </Col>
                <Col></Col>
            </Row>
        </React.Fragment>

    );
}

export default Home;
