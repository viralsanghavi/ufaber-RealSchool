import React from 'react'
import './Card.css'
const Card = ({ num, about, info, src }) => {
    return (
        <div className="card">
            <div className="carding">
                <img src={src} alt="" />
                <p>STEP {num}</p>
                <strong>
                    {about}
                </strong>
                <span>
                    {info}
                </span>
            </div>
        </div>
    )
}

export default Card
