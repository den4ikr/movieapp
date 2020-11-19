import { useEffect } from "react"
import { connect } from "react-redux"
import {getResults, setCurrentPage} from "../../redux/top-rated-reducer";
const { default: TopRated } = require("./TopRated")

const TopRatedContainer = (props) => {

    useEffect ( () => {
        props.getResults (props.currentPage);
    }, [props.currentPage] );

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage (pageNumber);
        props.getResults (props.currentPage);
    }

    return (
        <TopRated { ...props } onPageChanged = {onPageChanged} />
    )
}

let mapStateToProps = (state) => {
    return {
        results: state.topRated.results,
        currentPage: state.topRated.currentPage,
        pageSize: state.topRated.pageSize,
        totalPageCount: state.topRated.totalPageCount,
    }
}

export default connect (mapStateToProps, {getResults, setCurrentPage} )(TopRatedContainer);