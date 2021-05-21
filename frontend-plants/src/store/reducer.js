import {AXIOS_START, AXIOS_FAIL, GET_PLANTS_SUCCESS, DELETE_PLANTS_SUCCESS} from './actions'

const initialState = {
    plants: [],
    isLoading: false,
    error: null
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_START:
            return { 
                ...state, 
                isLoading: true, 
                error: null 
            };
        case AXIOS_FAIL:
            return { 
                ...state, 
                isLoading: false, 
                error: action.payload 
            };
        case GET_PLANTS_SUCCESS:
            return {
                ...state,
                plants: action.payload,
                isLoading: false, 
            }  
        case DELETE_PLANTS_SUCCESS:
            const deletePlants = state.plants.filter(plant => plant.id !== action.payload)
            return {
                ...state,
                plants: deletePlants, 
                isLoading: false,
            }        
        default: 
            return state;
    }
}