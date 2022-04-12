import React from 'react'

const Card = (props) => {
  return (
    <div className="card--container">
      <div className="card--image-container">
        <img src={`./assets/${props.imageUrl}`} alt="vacation image"></img>
      </div>
      <div className="card--info-container">
        <p>{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a></p>
        <h1>{props.title}</h1>
        <p>{props.startDate} - {props.endDate}</p>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
