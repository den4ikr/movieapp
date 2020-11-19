import { NavLink } from "react-router-dom";
import Preloader from "../Common/Preloder/Preloader";
import s from "./Popular.module.css";

const Popular = (props) => {
    
    if (!props.results) {
        return <Preloader />
    }
    

    let pages = [];
    for (let i = 1; i <= props.totalPagesCount; i++) {
        pages.push (i);
    };

    return (
        <div>
            <div className = {s.pages__row} >
                <div className = "btn-group mr-2" role="group" aria-label="First group" >
                    {pages.map ( p => {
                        return (
                            <button onClick = { () => (props.onPageChanged (p)) } type="button" className = "btn btn-secondary">{p}</button>
                        )
                    } )}
                </div>
            </div>
            <div className = {s.main__row} >
                {props.results ? props.results.map (r => {
                    return (
                        <div className = {s.movie__block} key = {r.id} >
                            <div className = {s.row} >
                                <div>
                                    <NavLink to = {"/movieblock/" + r.id} >
                                        <img alt = "poster" src = {`https://image.tmdb.org/t/p/w200${r.poster_path}`} />
                                    </NavLink>
                                </div>
                                <div className = {s.text__block} >
                                    <div className = {s.title} >
                                        {r.title}
                                    </div>
                                    <div className = {s.date} >
                                        {r.release_date}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : null }
            </div>
            <div className = {s.pages__row} >
                <div className = "btn-group mr-2" role="group" aria-label="First group" >
                    {pages.map ( p => {
                        return (
                            <button onClick = { () => (props.onPageChanged (p)) } type="button" className = "btn btn-secondary">{p}</button>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}

export default Popular;