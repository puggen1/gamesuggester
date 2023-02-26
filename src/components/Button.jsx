import React from 'react'

const Button = ({target, text, type}) => {
  return (
    <button className={type} onClick={()=>{console.log("test")}}>{text}</button>
  )
}

export default Button