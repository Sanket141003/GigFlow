import React, { useEffect, useState } from "react";
//import {Link} from "react-router-dom";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slide.scss";
import CatCard from "../catCard/CatCard";
import { cards } from "../../data";

const Slide = ({children}) => {
    const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
    return (
        <div className="slide">
            <div className="container">
                <Slider {...settings}>
                    {children}                 
                </Slider>
            </div>
        </div>
    )
}

export default Slide 