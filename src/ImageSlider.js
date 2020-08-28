import React from 'react'
import './ImageSlider.css'
import { Button } from '@material-ui/core';

const ImageSlider = () => {
    return (
        <div className="slider">
            <h1>See what our students have created</h1>
            <div className="slider__images">
                <div className="hidden">
                    <img src={require("./Assets/Image2.png")} alt="" />
                </div>
                <div className="hidden">
                    <img src={require("./Assets/Image2.png")} alt="" />
                </div>
                <div className="slider__imagesMid">
                    <div className="tv">
                        <h5 style={{ color: "#FF3A58", zIndex: 1000000, position: "absolute", right: '10px' }}>REAL<span style={{ color: "black" }}>TV</span></h5>
                    </div>
                    <img src={require("./Assets/Image5.png")} alt="" className="slider__imageHigh" />
                </div>
                <div className="hidden">

                    <img src={require("./Assets/Image7.png")} alt="" />
                </div>
                <div className="hidden">

                    <img src={require("./Assets/Image7.png")} alt="" />
                </div>

            </div>
            <div className="footer__initial">
                <Button>Go To RealTV</Button>
            </div>
        </div>
    )
}

export default ImageSlider
