import s from "./Home.module.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Carousel from "react-bootstrap/Carousel";
import Preloader from "../Common/Preloder/Preloader";
import { NavLink } from "react-router-dom";

const Home = (props) => {

    if (!props.results) {
        return <Preloader />
    }
    
    return (
        <div>
            <Carousel className = {s.main} >
                {props.results.map ( r => {
                    return (
                        <Carousel.Item className = {s.item} key = {r.id} >
                            <img alt = "slider img" className = {s.poster} src = {`https://image.tmdb.org/t/p/original${r.backdrop_path}`} />
                            <Carousel.Caption>
                                <div className = {s.carousel__row}>
                                    <div className = {s.title} >
                                        {r.title}
                                    </div>
                                    <div className = {s.overview} >
                                        {r.overview}
                                    </div>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                } )}
            </Carousel>
            <div>
                <div className = {s.home__main__title} >
                    Upcoming Movies
                </div>
            </div>
            <div className = {s.card__row} >
                {props.results.slice (0, 3).map ( r => {
                    return (
                        <div key = {r.id} className = {s.card} >
                            <div>
                                <NavLink to = {"/movieblock/" + r.id} >
                                    <img alt = "poster" src = {`https://image.tmdb.org/t/p/w300${r.poster_path}`} />
                                </NavLink>
                            </div>
                            <div className = {s.card__title} >
                                {r.title}
                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    )
}

export default Home;