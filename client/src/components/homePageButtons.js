import React from 'react';
import {Container, Button} from 'react-bootstrap';
import '../App.css'

function HomePageButtons(props) {
    return <Container>
        <Button href='#' className="Custom-test" variant='outline-primary' size='lg'>My Movies</Button>
        <Button href='#' variant='outline-primary' size='lg'>Recommended</Button>
        <Button href='#' variant='outline-primary' size='lg'>Browse</Button>
    </Container>
}

export default HomePageButtons;