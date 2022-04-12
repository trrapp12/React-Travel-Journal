import React from 'react'
import dataObject from './data'
import Card from './Card'

const App = (props) => {
  const dataArray = dataObject.map((input) => {
    return (
      <Card 
      title = {input.title}
      location = {input.location}
      googleMapsUrl = {input.googleMapsUrl}
      startDate = {input.startDate}
      endDate = {input.endDate}
      description = {input.description}
      imageUrl = {input.imageUrl}
      />
    )
  })
  return (
    <>
      {dataArray}
    </>
  )
}

export default App

