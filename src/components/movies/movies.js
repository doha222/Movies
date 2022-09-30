import React from "react";
import "./movies.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setfavs } from "../../store/actions";

function Movies() {
  const dispatch=useDispatch()
  let [moviesList, setmoviesList] = useState([]);
  let[Page,setPage]=useState(1);
  let lang=useSelector((state)=>state.lang)

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f7a48c7d23c22e3f54aabe6ed8aaf4e5&language=${lang}&page=${Page}`)
      .then((moviesData) => {
        console.log(moviesData);
        setmoviesList(moviesData.data.results);
      }).catch((err) => {
        console.log(err);
      })

  }, [Page,lang]);
  let goNext=()=>{
    setPage(++Page);
    console.log(Page)
  }
  let goPrev=()=>{
    if(Page!=1){
      setPage(--Page);
    }
    console.log(Page)
  }
  return (
    <>
      <div className="container">
        <h1>Movies</h1>       
        <div className="row">
          {moviesList.map((movie) => (
            <div className="card col-3">
              <img
                class="card-img-top"
                src={
                  "https://image.tmdb.org/t/p/original" + movie.poster_path
                }
                alt="Card image"
              />
              <div class="card-body">
                <Link to={`/movies/${movie.id}`} className="link">
                  <h4 class="card-title">{movie.title}</h4>
                </Link>
                <p class="card-text">Some example text.</p>
                <button class="fav" onClick={()=>dispatch(setfavs(movie))}> 
                  Add Favourits
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="btns" >
          <button class="btn btn-primary" onClick={goPrev}>
            Perivious
          </button>
          <button class="btn btn-primary" onClick={goNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Movies;
