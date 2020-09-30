import React from "react"
import { Container } from "react-bootstrap"
import HomePageButtons from "../components/homePageButtons"
import Hero from "../components/hero"

function HomePage(props) {
    return(
        <div className="App-header">
        <Hero className="hero" title={props.title} />
        <Container>
            <HomePageButtons />
        </Container>
        </div>
    )
}

export default HomePage