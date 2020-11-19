import { useEffect } from "react";
import { connect } from "react-redux"
import { withRouter } from "react-router-dom";
import { getResults, getImages } from "../../redux/block-reducer";
import Block from "./Block";

const BlockContainer = (props) => {

    useEffect ( () => {
        let movieId = props.match.params.movieId;
        props.getResults (movieId);
        props.getImages (movieId);
    }, [] )

    return (
        <Block { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        data: state.block.data,
        images: state.block.images,
        images: state.block.images,
    }
}

const WithUrlDataContainerComponent = withRouter (BlockContainer);

export default connect (mapStateToProps, {getResults, getImages} )(WithUrlDataContainerComponent);