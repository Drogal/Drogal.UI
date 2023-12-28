import React from "react";
import './Input.scss';
import { DisplayIcon, HandleClassName } from './InputUtils';

const Input = ({
    icon, 
    placeholder, 
    onChange, 
    value, 
    displayError, 
    errorMessage, 
    className="drogal-ui-input-detail"
}) =>{
    
    return (
        <div>
            <div className="input-container">            
                <DisplayIcon icon={ icon }/>
                <input 
                    className={HandleClassName(icon, className, displayError)} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value}
                />
            </div>
            {displayError && <div className="input-error-message">{errorMessage}</div>}
        </div>
    )
}

export default Input
