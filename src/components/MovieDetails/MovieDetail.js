
import "./MovieDetails.css"
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function MovieDetail() {

    let params = useParams();
    let [movie, setmovie] = useState([]);
    let lang = useSelector((state) => state.lang)
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=f7a48c7d23c22e3f54aabe6ed8aaf4e5&language=${lang}`)
            .then((singlemovie) => {
                console.log(singlemovie.data);
                setmovie(singlemovie.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [lang])
    return (
        <>

            <div className="container">
                <div className="wrapper">
                    <div className="main_card">
                        <h1>{movie.title}</h1>
                        {/* <img>src={ +movie.poster_path }</img> */}
                        <p>Year:{movie.release_date}</p>
                        <p>{movie.overview}</p>

                    </div>

                </div>


            </div>
        </>
    )
}
export default MovieDetail;