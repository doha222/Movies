import "./Home.css";
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Home(props) {
    let history = useHistory();
   
    let go_movies = () => {
        history.push("/movies");
    }
    let go_tvs = () => {
        history.push("/tvs");
    }

    return (
        <>
            <h1>HEllo from home</h1>

            <div className="btns">
               
                <button className="btn btn-primary" onClick={go_movies}>Go To Movies</button>
                <button className="btn btn-primary" onClick={go_tvs}>Go To Tvs</button>
            </div>

        </>
    );
}