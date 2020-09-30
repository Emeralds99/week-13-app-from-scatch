import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { motion } from 'framer-motion'
import mulholland from '../TestImages/Mulholland_poster_cropped.jpg'

function SecondRecommendation(props) {
    return <Container>
    <Row>
        <Col xs={6} md={4}>
            <motion.img whileHover={{
                    scale: [1, 1.25, 1.25],
                    borderRadius: ['50%', '20%', '20%' ]
                }} className="p-recommendation-card" src={mulholland} roundedCircle fluid></motion.img>
        </Col>
    </Row>
</Container>}

export default SecondRecommendation