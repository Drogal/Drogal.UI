import React from "react";
import './Button.scss'

export const Button = ({
    label, 
    onClick, 
    disabled, 
    type,
    loading,
    icon,
    id,
    className,
    size
}) => {

    return (
        <button 
            className={`drogal-ui-button ${type || 'default'} ${className || ""} ${size ||'medium'}`} 
            onClick={onClick} 
            disabled={disabled}
        >
            <label className={`drogal-ui-button-title title-${size || 'medium'}`}>
                {label}
            </label>
        </button>
    );
}

export default Button
