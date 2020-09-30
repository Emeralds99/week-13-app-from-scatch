import React from 'react'
import axios from 'axios'

import { Container, Row } from 'react-bootstrap'

import Card from './card'

// import starWars from '../Images/StarWarsIV.jpg'
// import fellowship from '../Images/Fellowship.jpg'
// import uncutGems from '../Images/UncutGems.jpg'

class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3001/", {headers: {
            crossdomain: true
        }})
            .then(res => {
                const items = res.data;
                this.setState({ items })
                        })
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        console.log(this.state)


        items.forEach((item) => {
            item.selected = item.selected ? false : true;

            if (item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items,
        });
    };

    makeItems = (items) => {
        return items.map((item) => {
            return (
                <Card
                  item={item}
                  click={(e) => this.handleCardClick(item.id, e)}
                  key={item.id}/>
            )
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel