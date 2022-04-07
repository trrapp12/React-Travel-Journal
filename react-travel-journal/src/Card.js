import React from 'react'


const Card = (props) => {
  return (
    <p>{props.title}</p>
    <p>{props.location}</p>
    <p>{props.googleMapsUrl}</p>
    <p>{props.startDate}</p>
    <p>{props.endDate}</p>
    <p>{props.description}</p>
    <p>{props.imageUrl}</p>
  )
}

export default Card