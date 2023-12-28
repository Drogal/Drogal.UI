import React from "react";
import './Input.scss'

const TextArea = ({
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
                className={`drogal-ui-input commom-area-detail ${ (displayError) ? "commom-area-error" : "" } ${className}`}
            />
            {displayError && <div className="input-error-message">{errorMessage}</div>}
        </div>        
    )
}

export default TextArea


