import React from 'react'
import Card from './Card'
import data from './data.js'

const App = (props) => {

  let cardInfo = data.map((input) => {
      title = input.title;
      location = input.location;
      googleMapsUrl = input.googleMapsUrl;
      startDate = input.startDate;
      endDate = input.endDate;
      description = input.description;
      imageUrl = input.imageUrl;
  }
    return (
      <Card 
      item = {item}
      />
    )
  
  )
  return (
    <h1>Hello World</h1>
    {cardInfo}
  )
}

export default App

