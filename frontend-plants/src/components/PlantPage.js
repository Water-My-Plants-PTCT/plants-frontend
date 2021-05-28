import React, { useState, useEffect } from 'react'
import AddPlantForm from "./AddPlantForm"
import Plants from "./Plants"
import { createPlant, editPlants, deletePlants } from "../store/actions"
import { useDispatch } from 'react-redux'
import { axiosWithAuth } from '../helpers/axiosWithAuth'
import { Link } from 'react-router-dom'
import {Router} from 'react-router-dom'


export const PlantPage = () => {
  const [click, setClick] = useState('')
  
  const handleClick = () => setClick(!click)
    
  
  
    return (
        <div>
         <Router>
            <Plants />
            <Link exact path='/protected/AddPlantForm'>
              <button onClick={handleClick}>Add Plant</button>
            </Link>
            <button>Edit Plant</button>
            <button>Delete Plant</button>
          </Router>
        </div>
    )
}

export default PlantPage
