import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap'

function Hero(props) {
    return (
            <Container fluid={true}>
                <Row className="justify-content-around py-5">
                    <Col md={8} sm={12}>
                        {props.title && (
                            <h5 className="display-1 font-weight-bold">{props.title}</h5>
                        )}
                    </Col>
                </Row>
            </Container>
    )
}

export default Hero