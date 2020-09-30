import React from "react"
import Carousel from "../components/carousel"
import Hero from "../components/hero"

function MyMoviesPage(props) {
    return(
        <div className="App-header">
            <Hero title={props.title} />
            <Carousel />
        </div>
    )
}

export default MyMoviesPage