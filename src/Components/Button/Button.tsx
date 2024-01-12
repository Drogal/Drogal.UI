import React from 'react';
import './Button.scss'

interface ButtonProps {
    label: string, 
    onClick: () => void, 
    disabled: boolean, 
    type: string,
    loading: false,
    icon: string,
    id: string,
    className: string,
    size: string
}

export const Button: React.FC<ButtonProps> = ({ 
    label, 
    type = 'default', 
    className = "", 
    size = 'medium', 
    onClick, 
    disabled 
}) => {

  return( 
    <button 
        className={`drogal-ui-button ${type} ${className} ${size}`} 
        onClick={onClick} 
        disabled={disabled}
    >
        <label className={`drogal-ui-button-title title-${size}`}>
            {label}
        </label>
    </button>
  )
};

export default Button;