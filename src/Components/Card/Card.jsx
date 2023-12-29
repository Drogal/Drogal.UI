import React from "react"
import './Card.scss'

const Card = (props) => {
    return (
        <div className={ "card-wrapper " + props.className } {...props.style}>
            {props.children}
        </div>
    )
}

export default Card