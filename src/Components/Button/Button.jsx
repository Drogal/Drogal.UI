import React from "react";
import './Button.scss'

const Button = ({title, onClick, disabled, setClass = "custom-button-default"}) => {
    return (
        <button className={`custom-button ${setClass}`} onClick={onClick} disabled={disabled}>
            <label className="custom-button-title">{title}</label>
        </button>
    );
}

export default Button
