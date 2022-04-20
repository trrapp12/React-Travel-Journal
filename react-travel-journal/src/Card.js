import React from 'react'

const Card = (props) => {
  return (
    <div className="card--container">
      <div className="card--image-container">
        <img src={`./assets/${props.imageUrl}`} alt="vacation"></img>
      </div>
      <div className="card--info-container">
        <div className="card--pin-container">
          <img src="./assets/pin.png" alt="map pin" className="card--map-pin"></img><p className="wide-kearning all-caps block">{props.location} <a className="" href={props.googleMapsUrl}>View on Google Maps</a></p>
        </div>
        <h1>{props.title}</h1>
        <p className="small-text bold">{props.startDate} - {props.endDate}</p>
        <p className="">{props.description}</p>
        <p className="photo-credit">{props.photoCredit}</p>
      </div>
      <div className="card--reverse-flow">
        <hr></hr>
      </div>

    </div>
  )
}

export default Card
