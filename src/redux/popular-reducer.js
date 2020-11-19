import {API} from "../api/api";

const SET_RESULTS = "SET_RESULTS";
const SET_CURERNT_PAGE = "SET_CURERNT_PAGE";

let initialState = {
    results: [],
    currentPage: 1,
    pageSize: 20,
    totalPagesCount: 5,
}

const PopularReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_RESULTS:
            return { ...state, results: action.results };
        case SET_CURERNT_PAGE:
            return { ...state, currentPage: action.currentPage };
        default:
            return state;
    } 
}

export const setResults = (results) => ( { type: SET_RESULTS, results } );

export const setCurrentPage = (currentPage) => ( { type: SET_CURERNT_PAGE, currentPage } );

export const getResults = (results) => (dispatch) => {
    API.getPopular (results)
        .then (response => {
            dispatch (setResults (response.data.results));
        })
}

export default PopularReducer;