import React from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';

function NavigationBar(props) {
    return (
    <Router>
        <Container className='p-o' fluid={true}>
            <Navbar className='border-bottom' bg='dark' variant='dark' expand='lg'>
                <Navbar.Brand><Link className="nav-link" to="/">FilmWeb</Link></Navbar.Brand>
                <Nav className='ml-auto'>
                    <Link className="nav-link" to="/MyMovies">
                        My Movies
                    </Link>
                </Nav>
                <Nav className='ml-auto'>
                    <Link className="nav-link" to="/Recommended">
                        Recommended
                    </Link>
                </Nav>
                <Nav className='ml-auto'>
                    <Link className="nav-link" to="/Browse">
                        Browse
                    </Link>
                </Nav>
            </Navbar>
        </Container>
    </Router>
    )}

export default NavigationBar;