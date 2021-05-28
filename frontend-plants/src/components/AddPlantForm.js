import React, { useState } from 'react'
import { axiosWithAuth } from '../helpers/axiosWithAuth'

const initialFormValues = {
  id: "", 
  nickname: "", 
  species: "",
  frequency: "",
}

const AddPlantForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [plants, setPlants] = useState({})
  const [disabledButton, setDisabledButton] = useState(true)
  const [error, setError] = useState("")
  
  const handleChange = (e) => {
    setFormValues({...formValues,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    console.log("submitted")

    axiosWithAuth()
    .post("/api/plants", plants, 
    // {
    //   header: {
    //     authorization: localStorage.getItem('token')
    //   }
    // }
    )
    
    .then((res) => {
      console.log(setPlants)
      console.log('make plant', res.data)
        setPlants(res.data)
    })
    .catch((error) => {
      console.log(error.data)
    })
        
  }

  return (
    <div>
      <h2>Add A Plant</h2>
      <form className="addClass" onSubmit={handleSubmit}>
        <label htmlFor="id">
        <input 
          type="text" 
          name="id" 
          value={formValues.id} 
          onChange={handleChange} placeholder="id"/>
        </label>

        <label htmlFor="nickname">
        <input 
          type="text" name="nickname" 
          value={formValues.nickname} 
          onChange={handleChange} placeholder="Nickname"/>
        </label>

        <label htmlFor="species">
        <input 
          type="text" 
          name="species" 
          value={formValues.species} 
          onChange={handleChange} placeholder="species"/>
        </label>

        <label htmlFor="frequency">
        <input 
          type="text" name="frequency" 
          value={formValues.frequency} 
          onChange={handleChange} placeholder="Watering Frequency"/>
        </label>
        
        <input type="submit"/>
      </form>
    </div>
  )
}

export default AddPlantForm
