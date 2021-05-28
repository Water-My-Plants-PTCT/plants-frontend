import {AXIOS_START, AXIOS_FAIL, GET_PLANTS_SUCCESS, DELETE_PLANTS_SUCCESS, EDIT_PLANTS_SUCCESS, UPDATE_INFO_SUCCESS, CREATE_PLANT_SUCCESS, GET_PLANT_ID, GET_USER_PLANT} from './actions'

const initialState = {
    plants: [],
    isLoading: false,
    isLoggedIn: window.localStorage.getItem('token'),
    error: null,
    phone: '',
    password: '',
    nickname: '',
    species: '',
    frequency: '',
    user_id: '',

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
                isLoggedIn: true, 
            }  
        case DELETE_PLANTS_SUCCESS:
            const deletePlants = state.plants.filter(plant => plant.id !== action.payload)
            return {
                ...state,
                plants: deletePlants, 
                isLoading: false,
                isLoggedIn: true
            }
        case EDIT_PLANTS_SUCCESS:
            const newPlants = state.plants.map((plant) => {
                if (plant.id === action.payload.id) {
                    return action.payload;
                } else {
                    return plant
                }
            })
            return {
                ...state,
                plants: newPlants,
                isLoading: false,
                isLoggedIn: true,
            }
        case UPDATE_INFO_SUCCESS:
            return {
                ...state,
                phone: action.payload,
                password: action.payload,
                isLoggedIn: true,
            }
        case CREATE_PLANT_SUCCESS:
            return {
                ...state,
                nickname: action.payload,
                species: action.payload,
                frequency: action.payload,
                user_id: action.payload,
                isLoggedIn: true,

            }
        case GET_PLANT_ID:
            return {
                ...state,
                isLoggedIn: true,
                error: null
            }  
        case GET_USER_PLANT:
            return {
                ...state,
                isLoggedIn: true,
            }  
            
            
        

        default: 
            return state;
    }
}