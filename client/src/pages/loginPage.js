import React from 'react'
import { Container } from 'react-bootstrap'
import Login from '../components/login'
import Hero from '../components/hero'

function LoginPage(props) {
    return(
        <div className="App-header">
        <Hero title={props.title} />
        <Container>
            <Login />
        </Container>
        </div>
    )
}

export default LoginPage