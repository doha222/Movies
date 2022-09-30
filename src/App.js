import "./App.css";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";
import Tv from "./components/tv/tv";
import My_Carousel from "./components/Carousel/Carousel";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
//import ProductsDetails from "./components/ProductDetails/ProductDetails";
import Favs from "./components/favs/favs";

function App() {

  return (
    <>
      
      <Router>
       <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" exact component={MovieDetail} />
        <Route path="/home" component={Home} />
        <Route path="/tvs" component={Tv} />
        {/* <Route path="/products" exact component={Products} /> */}
        <Route path="/favs" component={Favs} />
        {/* <Route path="/productdetails/:id" component={ProductsDetails} /> */}
      </Router>
    </>
  );
}

export default App;
