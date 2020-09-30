import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { motion } from 'framer-motion'
import snowpiercer from '../TestImages/Snowpiercer_poster_cropped.jpg'

function PrimaryRecommendation(props) {
    return <Container>
        <Row>
            <Col xs={6} md={4}>
                <motion.img whileHover={{
                    scale: [1, 2, 2],
                    borderRadius: ['50%', '20%', '20%' ]
                }} className="p-recommendation-card" src={snowpiercer} 
                    roundedCircle fluid></motion.img>
            </Col>
        </Row>
    </Container>
}

export default PrimaryRecommendation

