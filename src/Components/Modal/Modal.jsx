import React from "react";
import Button from "../Button/Button";
import "./Modal.scss";

export const Modal = (props) => {
    const { 
        visible, 
        title, 
        cancelClick, 
        confirmClick, 
        overwriteModalCSS 
    } = props;

    return (
        <div className={ visible ? "drogal-ui-modal-overlay" : "drogal-ui-modal-overlay-hidden" }>
            <div className="drogal-ui-modal-container" style={overwriteModalCSS}>
                { title && <div className="drogal-ui-modal-title">{title}</div> }
                <div className="drogal-ui-modal-content">
                    {props.children}
                </div>
                <div className="drogal-ui-modal-container-buttons">
                    { cancelClick && 
                        <Button 
                            title={cancelClick.title} 
                            setClass="custom-button-danger" 
                            onClick={ cancelClick.onClick } 
                        /> 
                    }
                    { confirmClick && 
                        <Button 
                            title={confirmClick.title} 
                            onClick={ confirmClick.onClick } 
                        /> 
                    }
                </div>
            </div>
        </div>
    );
}

export default Modal;
