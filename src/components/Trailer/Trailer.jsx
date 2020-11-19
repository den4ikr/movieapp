import s from "./Trailer.module.css";
const { default: ReactPlayer } = require("react-player");

const Trailer = (props) => {
    return (
        <div>
            <div className = {s.row} >
                {props.results.map (r => {
                    return (
                        <div className = {s.video__item} >
                            <ReactPlayer className = {s.viaeo} url = {`https://www.youtube.com/watch?v=${r.key}`} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Trailer;