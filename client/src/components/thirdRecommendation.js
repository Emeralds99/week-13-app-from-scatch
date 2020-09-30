import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'
import { motion } from 'framer-motion'
import hereditary from '../TestImages/Hereditary_poster_cropped.jpg'

function ThirdRecommendation(props) {
    return <Container>
    <Row>
        <Col xs={6} md={4}>
            <motion.img whileHover={{
                    scale: [1, 1.25, 1.25],
                    borderRadius: ['50%', '20%', '20%' ]
                }} className="p-recommendation-card" src={hereditary} roundedCircle fluid></motion.img>
        </Col>
    </Row>
</Container>}

export default ThirdRecommendation