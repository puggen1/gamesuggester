import React from 'react'
const Button = ({text, type, modalFunction, dataType}) => {
  if(modalFunction){
    return(
      <button onClick={(e)=>{modalFunction(e)}} data-modal-type={dataType} className={type}>{text}</button>
    )
  }else{
    return (
    <button  className={type}>{text}</button>
  )
}}

export default Button