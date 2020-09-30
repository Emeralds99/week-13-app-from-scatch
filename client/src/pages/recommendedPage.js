import React from "react"
import {Container, Row, Col} from 'react-bootstrap'
import PrimaryRecommendation from "../components/primaryRecommendation"
import SecondRecommendation from "../components/secondRecommendation"
import ThirdRecommendation from "../components/thirdRecommendation"
import Hero from "../components/hero"

function RecommendedPage(props) {
    return(
        <div className="App-header">  
            <Hero title={props.title} />
            <Container>
                <Row>
                    <Col xs={4}>
                        <SecondRecommendation xs={4} md={4}/>
                    </Col>
                    <Col xs={4}>
                        <PrimaryRecommendation xs={4} md={4}/>
                    </Col>
                    <Col xs={4}>
                        <ThirdRecommendation xs={4} md={4}/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default RecommendedPage