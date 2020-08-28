import React from 'react'
import CustomSeparator from './Card/BreadCrumb'
import Player from './Player'

const Hero = () => {
    return (
        <div className="hero">
            <CustomSeparator />
            <div className="hero__title">
                <p>Trip to the Palace of Versailles</p>
                <div className="hero__recommend">
                    <img src={require("./Assets/like.svg")} alt="" />
                    <div>
                        <h3>125</h3>
                        <p>RECOMMENDED</p>
                    </div>
                </div>
            </div>
            <div className="hero__about">
                <p>ONLINE MUSEUM</p>
                <p>8+ Years</p>
            </div>
            <Player />
        </div>
    )
}

export default Hero