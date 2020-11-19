import { API } from "../api/api";

const SET_RESULTS = "SET_RESULTS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    results: [],
    pageSize: 20,
    currentPage: 1,
    totalPageCount: 5,
}

const TopRatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return { ...state, results: action.results };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    }
}

export const setResults = (results) => ( { type: SET_RESULTS, results } );

export const setCurrentPage = (currentPage) => ( { type: SET_CURRENT_PAGE, currentPage } );

export const getResults = (results) => (dispatch) => {
    API.getToprated (results)
        .then (response => {
            dispatch (setResults (response.data.results))
        })
}

export default TopRatedReducer;