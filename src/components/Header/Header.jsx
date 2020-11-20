import s from "./Header.module.css";
import "bootstrap/dist/js/bootstrap.bundle";
import searchIcon from "../../assets/images/magnifying-glass-search.png";
const { NavLink, withRouter } = require("react-router-dom");

const Header = (props) => {

    return (
        <div className = {s.row} >
            <div className = {s.link__row} >
                <div>
                    <NavLink className = {s.link} to = {"/toprated"} >Top Rated</NavLink>
                </div>
                <div>
                    <NavLink className = {s.link} to = {"/popular"} >Popular</NavLink>
                </div>
            </div>
            <div className = {s.drop__down} >
                <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Menu
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                        <NavLink to = {"/toprated"} className="dropdown-item">Top Rated</NavLink>
                        <NavLink to = {"/popular"} className="dropdown-item">Popular</NavLink>
                    </div>
                </div>
            </div>
            <div>
               <NavLink to = "/search" >
                   <img src = {searchIcon} />
               </NavLink>
            </div>
            <div className = {s.title} >
               <NavLink to = {"/movieapp"} className = {s.title} >
                    moviedb
               </NavLink>
            </div>
        </div>
    )
}

export default withRouter (Header);