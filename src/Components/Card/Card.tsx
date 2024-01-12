import React, { ReactNode } from "react"
import './Card.scss'

interface CardProps {
    children: ReactNode,
    className: string, 
    style?: React.CSSProperties
}

export const Card: React.FC<CardProps> = ({ 
    children, 
    className, 
    style 
}) => {
    return (
        <div 
            className={`card-wrapper ${className}`}  
            style={style}
        >
            {children}
        </div>
    )
}

export default Card