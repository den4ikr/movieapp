import { useEffect } from "react";
import { connect } from "react-redux";
import { getResults } from "../../redux/home-reducer";
const { default: Home } = require("./Home")

const HomeContainer = (props) => {

    useEffect ( () => {
        props.getResults ();
    }, [] )

    return (
        <Home { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        results: state.home.results,
    }
}

export default connect (mapStateToProps, {getResults} )(HomeContainer);