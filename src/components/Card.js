import React from "react"
import location from "../images/location.png"

export default function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="card">
                <img className="card-img" src={props.item.imageUrl} />
                <div className="card-text">
                    <img className="location-pin" src={location} />
                    <h3>{props.item.location}</h3>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                    <h2>{props.item.title}</h2>
                    <p className="goal-date">{props.item.goalDate}</p>
                    <p className="description">{props.item.description}</p>
                </div>
            </div>
            <hr></hr>
        </div>
    )
}
