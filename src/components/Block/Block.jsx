import Preloader from "../Common/Preloder/Preloader";
import TrailerContainer from "../Trailer/TrailerContainer";
import s from "./Block.module.css";

const Block = (props) => {   
    if (!props.data) {
        return <Preloader />
    }

    const backdropPath = "https://image.tmdb.org/t/p/original" + props.data.backdrop_path;

    for (let i = 0; i < 3; i++) {}

    return (
        <div>
            <div className = {s.bg} style = { { 
                backgroundImage: `url(${backdropPath})`, 
                width: "100%", 
                height: "780px", 
                backgroundRepeat: "no-repeat",
                margin: "0 auto",
                marginBottom: "100px",
                backgroundPosition: "50% 50%",
            } } >
                <div className = {s.title} >
                    {props.data.title}
                </div>
                <div className = {s.text} >
                    {props.data.overview}
                </div>
            </div>
            <div className = {s.info} >
                <div className = {s.info__title} >
                    Info
                </div>
                <div className = {s.genres} > Genres: &nbsp;
                    { props.data.genres ? props.data.genres.map ( g => {
                        return (
                            <span key = {g.id} >
                                {g.name},
                            </span>
                        )
                    } ) : null}
                </div>
                <div className = {s.date} >
                    Release Date: {props.data.release_date},
                </div>
                <div className = {s.runtime} >
                    Runtime: {props.data.runtime} minutes.
                </div>
                <div>

                </div>
            </div>
            <div>
                <div className = {s.img__row} >
                    {props.images ? props.images.slice(0,3).map (i => {
                        return (
                            <div key = {i.file_path} >
                                <img className = {s.img_element} alt = "imgElement" src = {`https://image.tmdb.org/t/p/w300/${i.file_path}`} />
                            </div>
                        )
                    }) : null}
                </div>
            </div>
            <div className = {s.trailer} >
               <TrailerContainer />
            </div>
        </div>
    )
}

export default Block;