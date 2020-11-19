import { useEffect } from "react"
import { connect } from "react-redux"
import {getResults, setCurrentPage} from "../../redux/popular-reducer"
const { default: Popular } = require("./Popular")

const PopularContainer = (props) => {

    useEffect ( () => {
        props.getResults (props.currentPage);
    }, [props.currentPage] )

    const onPageChanged = (pageNumber) => {
        props.setCurrentPage (pageNumber);
        props.getResults (props.currentPage);
    }

    return (
        <Popular { ...props } onPageChanged = {onPageChanged} />
    )
}

let mapStateToProps = (state) => {
    return {
        results: state.popular.results,
        currentPage: state.popular.currentPage,
        pageSize: state.popular.pageSize,
        totalPagesCount: state.popular.totalPagesCount,
    }
}

export default connect (mapStateToProps, {
    getResults, 
    setCurrentPage,
} )(PopularContainer);
