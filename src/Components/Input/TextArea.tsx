import React from "react";
import './Input.scss';
import { HandleTextAreaClassName } from './InputUtils';

interface TextAreaProps {
    placeholder, 
    onChange, 
    value, 
    displayError, 
    errorMessage,
    className
}

export const TextArea: React.FC<TextAreaProps> = ({ 
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
                className={HandleTextAreaClassName(displayError, className)}
            />
            {displayError && <div className="input-error-message">{errorMessage}</div>}
        </div>        
    )
}

export default TextArea