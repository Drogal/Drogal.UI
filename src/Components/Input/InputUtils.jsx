import React from "react";

export const DisplayIcon = ({icon}) =>{
  if(icon !== undefined){
    return <img className="input-icon" src={icon}/>
  }else{
    return <React.Fragment/>
  }    
}
  
export const HandleClassName = (icon, setClass, displayError) =>{

  let _className = ((icon === undefined) && (setClass==="drogal-ui-input-detail"))? setClass + "-no-padding" : setClass
  return `drogal-ui-input-detail drogal-ui-input ${_className} ${ (displayError) ? "drogal-ui-input-error" : "" }`
}

export const HandleTextAreaClassName = (displayError, className) =>{
  return `drogal-ui-input drogal-ui-area-detail ${ (displayError) ? "drogal-ui-area-error" : "" } ${className}`
}
  