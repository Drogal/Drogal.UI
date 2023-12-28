import React from "react";
import './Button.scss'

const Button = ({
    label, 
    onClick, 
    disabled, 
    loading,
    icon,
    id,
    className = "drogal-ui-button-default"
}) => {
    return (
        <button className={`drogal-ui-button ${className}`} onClick={onClick} disabled={disabled}>
            <label className="drogal-ui-button-title">{label}</label>
        </button>
    );
}

export default Button
