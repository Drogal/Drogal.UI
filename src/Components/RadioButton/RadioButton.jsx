import React from "react";
import './RadioButton.scss'

export const RadioButton = ({
    title, 
    onChange, 
    value, 
    displayError, 
    errorMessage
}) =>{
    return (
        <div>
            <div className="drogal-ui-radio-container">            
                <input className="drogal-ui-input-radio" type="radio" value={value} onChange={onChange}/>
                <label className="drogal-ui-radio-title">{title}</label>
            </div>
            {displayError && <div className="drogal-ui-input-radio-error-message">{errorMessage}</div>}
        </div>
    )
}

export default RadioButton


