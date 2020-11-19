import { API } from "../api/api";

const SET_RESULTS = "SET_RESULTS";

let initialState = {
    results: [],
}
const HomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return { ...state, results: action.results };
        default:
            return state;
    }
}

export const setResults = (results) => ( { type: SET_RESULTS, results } );

export const getResults = (results) => async (dispatch) => {
    const response = await API.getLatest ()
        dispatch ( setResults (response.data.results) );
}

export default HomeReducer;