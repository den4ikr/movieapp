import { API } from "../api/api";

const SET_RESULST = "SET_RESULST";

let initialState = {
    results: [],
}

const TrailerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULST:
            return { ...state, results: action.results }
        default:
            return state;
    }
}

export const setResults = (results) => ( { type: SET_RESULST, results } );

export const getVideos = (movieId) => (dispatch) => {
    API.getVideos (movieId)
        .then (response => {
            dispatch (setResults (response.data.results))
        })
}

export default TrailerReducer;