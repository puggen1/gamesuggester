import React from 'react'

const Button = ({target, text}) => {
  return (
    <button onClick={()=>{console.log("test")}}>{text}</button>
  )
}

export default Button