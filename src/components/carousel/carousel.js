import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const slide1 =require('../../assets/slide_1.png');
const slide2 =require('../../assets/slide_2.png');
const slide3 =require('../../assets/slide_3.png');
const slide4 =require('../../assets/slide_4.png');
const slide5 =require('../../assets/slide_5.png');

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel autoPlay={true} infiniteLoop showThumbs={false}>
                <div>
                    <img src={slide1} />
                    <p className="legend" style={{backgroundColor:'#d4e059'}}>Legend 1</p>
                </div>
                <div>
                    <img src={slide2} />
                    <p className="legend" style={{backgroundColor:'#d4e059'}}>Legend 2</p>
                </div>
                <div>
                    <img src={slide3} />
                    <p className="legend" style={{backgroundColor:'#d4e059'}}>Legend 3</p>
                </div>
                <div>
                    <img src={slide4} />
                    <p className="legend" style={{backgroundColor:'#d4e059'}}>Legend 1</p>
                </div>
                <div>
                    <img src={slide5} />
                    <p className="legend" style={{backgroundColor:'#d4e059'}}>Legend 2</p>
                </div>
            </Carousel>
        );
    }
};
export default CarouselComponent;


