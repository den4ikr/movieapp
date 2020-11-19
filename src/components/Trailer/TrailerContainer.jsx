import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {getVideos} from "../../redux/trailer-reducer";
const { default: Trailer } = require("./Trailer");

const TrailerContainer = (props) => {

    useEffect ( () => {
        let movieId = props.match.params.movieId;
        props.getVideos (movieId);
    }, [] )

    return (
        <Trailer { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        results: state.trailer.results,
    }
}

let WithUrlDataContaineComponent = withRouter (TrailerContainer);

export default connect (mapStateToProps, {getVideos} )(WithUrlDataContaineComponent);