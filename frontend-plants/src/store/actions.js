import { axiosWithAuth } from "../helpers/axiosWithAuth"


export const AXIOS_START = "AXIOS_START"
export const AXIOS_FAIL = "AXIOS_FAIL"
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS"
export const DELETE_PLANTS_SUCCESS = "DELETE_PLANTS_SUCCESS"
export const EDIT_PLANTS_SUCCESS = "EDIT_PLANTS_SUCCESS"
export const UPDATE_INFO_SUCCESS = "UPDATE_INFO_SUCCESS"
export const CREATE_PLANT_SUCCESS = "CREATE_PLANT_SUCCESS"
export const GET_PLANT_ID = "GET_PLANT_ID"
export const GET_USER_PLANT = "GET_USER_PLANT"

export const getPlants = () => (dispatch) => {
    dispatch({ type: AXIOS_START});
    axiosWithAuth()
    .get('/api/plants')
    .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_PLANTS_SUCCESS, payload: res.data})
    })
    .catch((error) => dispatch({ type: AXIOS_FAIL, payload: error.data }));
}

export const getPlantsID = (id) => (dispatch) => {
    dispatch({ type: AXIOS_START});
    axiosWithAuth()
    .get(`/api/plants/${id}`)
    .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_PLANT_ID, payload: res.data.id})
    })
    .catch((error) => dispatch({ type: AXIOS_FAIL, payload: error.data }));
}

export const getUserPlants = (id) => (dispatch) => {
    dispatch({ type: AXIOS_START});
    axiosWithAuth()
    .get(`/api/plants/user/${id}`)
    .then((res) => {
        console.log(res.data);
        dispatch({ type: GET_USER_PLANT, payload: res.data.id})
    })
    .catch((error) => dispatch({ type: AXIOS_FAIL, payload: error.data }));
}

export const deletePlants = (plantsID) => (dispatch) => {
    dispatch({ type: AXIOS_START });

    axiosWithAuth()
        .delete(`/api/plants/${plantsID}`)
        .then((response) => {
            dispatch({ type: DELETE_PLANTS_SUCCESS, payload: plantsID });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
}

export const editPlants = (plants) => (dispatch) => {
    dispatch({ type: AXIOS_START });

    axiosWithAuth()
        .put(`/api/plants/${plants.id}`, plants)
        .then((response) => {
            dispatch({
                type: UPDATE_INFO_SUCCESS,
                payload: response.data.plants[0],
            });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
}

export const updateUserInfo = (id) => (dispatch) => {
    axiosWithAuth()
    .put(`/api/auth/users/${id}`, id)
        .then((response) => {
            dispatch({
                type: EDIT_PLANTS_SUCCESS,
                payload: response.data.id,
            });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
}

export const createPlant = (plants) => (dispatch) => {
    axiosWithAuth()
    .post("/api/plants", plants)
    .then((res) => {
        dispatch({
            type: CREATE_PLANT_SUCCESS,
            payload: res.data.plants
        })
    })
    .catch((error) => {
        dispatch({ type: AXIOS_FAIL, payload: error.data });
    });
}