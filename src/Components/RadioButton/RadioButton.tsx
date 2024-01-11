import React from "react";
import './RadioButton.scss'

interface RadioButtonProps {
    label: string, 
    onChange: void, 
    value: any, 
    displayError: boolean, 
    errorMessage: string
}

export const RadioButton: React.FC<RadioButtonProps> = ({ 
    label, 
    onChange, 
    value, 
    displayError, 
    errorMessage
}) =>{
    return (
        <div>
            <div className="drogal-ui-radio-container">            
                <input 
                    className="drogal-ui-input-radio" 
                    type="radio" 
                    value={value} 
                    onChange={onChange}
                />
                <label className="drogal-ui-radio-title">
                    {label}
                </label>
            </div>
            {displayError && <div className="drogal-ui-input-radio-error-message">
                {errorMessage}
            </div>}
        </div>
    )
}

export default RadioButton


