import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./tv.css";
export default function Tv() {

  let [tvShows, setTvshows] = useState([]);
  let lang=useSelector((state)=>state.lang)
  // let [isAuth, setIsAuth] = useState(true);
  // let [showDetails, setShowDetails] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular?api_key=f7a48c7d23c22e3f54aabe6ed8aaf4e5&language=${lang}&page=5`
      )
      .then((tvData) => {
        console.log(tvData.data.results)
        setTvshows(tvData.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [lang]);

  let toggleDetails = (tvid) => {
    let newTvs = tvShows.filter((tv) => {
      if (tv.id == tvid) {
        tv.isVisable = !tv.isVisable;
      }
      return tv;
    });
    setTvshows(newTvs);
  };
  return (
    <>
      <div className="container">
        <h1>TVs Show</h1>
        <div className="row">
          {tvShows.map((singleTv) => (
            <div
              className="card col-3">
              <img
                class="card-img-top"
                src={
                  "https://image.tmdb.org/t/p/original" + singleTv.poster_path
                }
                alt="Card image"
              />
              <div class="card-body">
                <h4 class="card-title">{singleTv.name}</h4>
                {singleTv.isVisable && (
                  <p class="card-text">{singleTv.overview}</p>
                )}
                <button
                  class="btn btn-primary"
                  onClick={() => {
                    toggleDetails(singleTv.id);
                  }}
                >
                  {singleTv.isVisable ? 'Hide Details' : 'See Details'}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <button class="btn btn-primary">
            Perivious
          </button>
          <button class="btn btn-primary">
            Next
          </button>

        </div>
      </div>
    </>
  );
}
