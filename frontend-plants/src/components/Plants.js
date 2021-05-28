import React from 'react'

const Plants = (props) => {
  const {} = props
  
  return (
    <div className="plant-display">
      <div className="plant-info">
        <h3>Id:</h3>
        <p>{}</p>
      </div>
      <div className="plant-info">
        <h3>Nickname:</h3>
      </div>
        <p>{}</p>
      <div className="plant-info">
        <h3>Species:</h3>
        <p>{}</p>
      </div>
      <div className="plant-info">
        <h3>Watering Frequency:</h3>
        <p>{}</p>
      </div>
    </div>
  )
}

export default Plants
