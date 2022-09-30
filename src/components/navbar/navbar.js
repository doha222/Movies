import React, { useState } from "react";
import "./navbar.css";
import NavLink from "../link/link";
import { useDispatch, useSelector } from "react-redux";
import changelang from "../../store/actions";

function Navbar() {
  const dispatch=useDispatch()
  let [navelements, setnavelements] = useState([
    { data: "/", content: "Home" },
    { data: "/movies", content: "Movies" },
    { data: "/tvs", content: "Tvs" },
   // { data: "/products", content: "Products" },
    { data: "/favs", content: "Favs" },
   
    { data: "#Cartoons", content: "Cartoon" },
    { data: "#about", content: "About" },
  ])
  let togglelang=()=>{
        dispatch(changelang(lang=='ar-SA'?'en-US':'ar-SA'))
  }
  let lang=useSelector((state)=>state.lang)
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light bg-light" id="navv">
        <a class="navbar-brand" href="#"> EgyBest</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >         
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            {navelements.map((item) => (
              <NavLink data={item.data} content={item.content} />
            ))}
          </ul>
          <button className="btn btn-primary" onClick={togglelang}>{lang}</button>
        </div>
      </nav>
    </>
  );

}
export default Navbar;
