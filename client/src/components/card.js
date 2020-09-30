import React from 'react';
import CardContent from "./cardContent"
import '../App.css';
// import starWars from '../Images/StarWarsIV.jpg'


function Card(props) {
    return(
        <div className="d-inline-block m-card"
        onClick={(e) => props.click(props.item)}
        >
            <img
            className="m-card-image"
            src={props.item.imgsrc}
            alt={props.item.alt}
            ></img>
            {props.item.selected && (
                <CardContent
                title={props.item.title}
                director={props.item.director}
                link={props.item.link} />
            )}
        </div>
    )
}

export default Card;