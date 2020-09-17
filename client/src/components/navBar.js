import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';

function NavigationBar(props) {
    return <Container className='p-o' fluid={true}>
        <Navbar className='border-bottom' bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand>FilmWeb</Navbar.Brand>
            <Nav className='ml-auto'>
                My Movies
            </Nav>
            <Nav className='ml-auto'>
                Recommended
            </Nav>
            <Nav className='ml-auto'>
                Browse
            </Nav>
        </Navbar>
    </Container>
}

export default NavigationBar;