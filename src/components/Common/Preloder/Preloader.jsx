import preloader from "../../../assets/Loading/Gear-0.4s-200px.svg";
import s from "./Preloder.module.css";

const Preloader = (props) => {
    return (
        <div className = {s.row} >
            <img alt = "Preloader" src = {preloader} />
        </div>
    )
}

export default Preloader;