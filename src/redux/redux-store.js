import PopularReducer from "./popular-reducer";
import thunkMiddleware from "redux-thunk";
import TopRatedReducer from "./top-rated-reducer";
import BlockReducer from "./block-reducer";
import SliderReducer from "./slider-reducer";
import TrailerReducer from "./trailer-reducer";
import HomeReducer from "./home-reducer";

const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducers = combineReducers ( {
    popular: PopularReducer,
    topRated: TopRatedReducer,
    block: BlockReducer,
    slider: SliderReducer,
    trailer: TrailerReducer,
    home: HomeReducer,
} )

let store = createStore (reducers, applyMiddleware (thunkMiddleware));

export default store;