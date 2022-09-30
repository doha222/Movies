import React from "react";
import "./Carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Link_img from "../Link_img/Link_img";

class My_Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            Carousel_imgs: [
                {
                    src_img: "https://img.freepik.com/premium-photo/3d-render-popcorn-with-cinema-time_252008-407.jpg?w=2000",
                    alt_img: "Fisrt slide"
                },
                {
                    src_img: "https://image.shutterstock.com/image-vector/online-cinema-art-movie-watching-260nw-700366096.jpg",
                    alt_img: "Second slide"
                },
                {
                    src_img: "https://upload.wikimedia.org/wikipedia/en/5/5a/OnCinemaTitle.png",
                    alt_img: "Third slide"
                },
                {
                    src_img: "https://img.freepik.com/premium-photo/3d-render-popcorn-with-cinema-time_252008-407.jpg?w=2000",
                    alt_img: "Fisrt slide"
                },
            ],
        };
    }
    render() {
        return (
            <>
                <Carousel className="Carousel">

                    {
                        this.state.Carousel_imgs.map((i) => (
                            <Carousel.Item>
                                <Link_img src_img={i.src_img} alt_img={i.alt_img} />
                            </Carousel.Item>
                        ))
                    }


                </Carousel>
            </>
        );
    }
}
export default My_Carousel;
