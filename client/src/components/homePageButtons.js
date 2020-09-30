import React from 'react';
import {Container, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../App.css'

function HomePageButtons(props) {
    return <Container md={3}>
        <Button className="Home-page-buttons" variant='outline-primary' size='lg'><Link to="/MyMovies">MyMovies</Link></Button>
        <Button className="Home-page-buttons" variant='outline-primary' size='lg'><Link to="/Recommended">Recommended</Link></Button>
        <Button className="Home-page-buttons" variant='outline-primary' size='lg'><Link to="/Browse">Browse</Link></Button>
    </Container>
}

export default HomePageButtons;