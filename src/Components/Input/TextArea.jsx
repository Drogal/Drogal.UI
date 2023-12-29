import React from "react";
import './Input.scss'

export const TextArea = ({
    placeholder, 
    onChange, 
    value, 
    displayError, 
    errorMessage,
    className
}) =>{
    return(
        <div className="input-container">
            <textarea
                onChange={onChange}
                value={value}
                placeholder={placeholder}
                className={`drogal-ui-input drogal-ui-area-detail ${ (displayError) ? "drogal-ui-area-error" : "" } ${className}`}
            />
            {displayError && <div className="input-error-message">{errorMessage}</div>}
        </div>        
    )
}

export default TextArea