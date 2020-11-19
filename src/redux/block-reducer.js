import { API } from "../api/api";

const SET_DATA = "SET_RESULTS";
const SET_BLOCK = "SET_BLOCK";
const SET_IMAGES = "SET_IMAGES";

let initialState = {
    data: {},
    block: null,
    images: [],
};

const BlockReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return { ...state, data: action.data };
        case SET_BLOCK:
            return { ...state, block: action.block };
        case SET_IMAGES:
            return { ...state, images: action.images };
        default:
            return state;
    }
}

export const setData = (data) => ( { type: SET_DATA, data } );

export const setBlock = (block) => ( { type: SET_BLOCK, block } );

export const setImages = (images) => ( { type: SET_IMAGES, images } );

export const getResults = (movieId) => (dispatch) => {
    API.getMovieBlock (movieId)
        .then (response => {
            dispatch (setData (response.data))
        })
}

export const getImages = (movieId) => (dispatch) => {
    API.getImages (movieId)
        .then (response => {
            dispatch (setImages (response.data.backdrops))
        })
}


export default BlockReducer;