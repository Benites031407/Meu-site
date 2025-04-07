'use client'
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default class Carousal extends Component {
  render() {
    const settings = {
      
      infinite: true,
      slidesToShow: 1,
      centerMode: true,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows:false,
      swipe:true,
      dots: true,
      pauseOnHover: true
    };
    return (
      <div>
      

        <Slider {...settings}>
         <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/laura.jpeg"
              alt="carousal"
            />
          </div>
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/fusca.png"
              alt="carousal"
            />
          </div>
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/pais.jpeg"
              alt="carousal"
            />
          </div>
          <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="assets/maxpequeno.jpeg"
              alt="carousal"
            />
          </div>
        </Slider>
      </div>
    );
  }
}