import { axiosWithAuth } from "../helpers/axiosWithAuth"


export const AXIOS_START = "AXIOS_START"
export const AXIOS_FAIL = "AXIOS_FAIL"
export const GET_PLANTS_SUCCESS = "GET_PLANTS_SUCCESS"
export const DELETE_PLANTS_SUCCESS = "DELETE_PLANTS_SUCCESS"


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