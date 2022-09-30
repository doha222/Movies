import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {  useSelector } from "react-redux";

function Favs() {
    
  let favlist=useSelector((state)=>state.favs)
  return (
    <>
      <div className="container">
        <h1>Movies</h1>       
        <div className="row">
          {favlist.map((movie) => (
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favs;
