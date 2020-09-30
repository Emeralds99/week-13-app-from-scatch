import React from 'react'
import { useSpring, animated } from "react-spring"

function CardContent(props) {
    const style = useSpring({ opacity: 1, from: { opacity: 0}})

    return (<animated.div className="m-card-info" style={style}>
        <p className="m-card-title">{props.title}</p>
        <p className="m-card-director">{props.director}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            IMDB
        </a>
    </animated.div>)
}

export default CardContent