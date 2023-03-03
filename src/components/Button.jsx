import React from 'react'
const Button = ({text, type, }) => {
 
    return (
    <button  className={type}>{text}</button>
  )
}

export default Button