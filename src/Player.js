import React from 'react'
import { Button } from '@material-ui/core'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
const Player = () => {
    return (
        <div className='player'>
            <div className="playerLeft">
                <img src={require("./Assets/Image10.png")} alt="" />
                <h5>REAL SCHOOL</h5>
                <Button><PlayArrowIcon /> Watch Trailer</Button>
            </div>
            <div className="playerRight">
                <div className="basic">
                    <p>Live On</p>
                    <p>Devices</p>
                </div>
                <div className="basic">
                    <h3>29 June 2020 for 60 min</h3>
                    <div className='devices'>
                        <img src={require("./Assets/app.svg")} alt="" />
                        <p>or</p>
                        <img src={require("./Assets/app.svg")} alt="" />
                    </div>

                </div>
                <div className="basic basic__slot">
                    <p>Choose Slot</p>
                </div>
                <div className="slot__timings">
                    <Button>10.30 AM</Button>
                    <Button>5 PM</Button>
                    <Button className="greenButton">6.30 PM</Button>
                </div>
                <div className="basic slot__timings" style={{ marginBottom: '35px' }}>
                    <p>2 / 5 Seats left!</p>
                    <p>1 / 5 Seats left!</p>
                </div>
                <div className="basic">
                    <p>Class Fee</p>
                </div>
                <div className="price">
                    <Button><span className="cancelled">INR 120 </span> INR 160 </Button>
                    <span>Earn 100 + Points</span>
                </div>
                <div className="booking">
                    <Button className="booking__book">Book this Class for Free</Button>
                    <Button className="booking__share">Share</Button>
                    <Button className="booking__shareshort"><ShareOutlinedIcon /></Button>

                </div>
            </div>
        </div>
    )
}

export default Player
