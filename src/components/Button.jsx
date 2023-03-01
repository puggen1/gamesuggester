import React from 'react'
import styles from "./Modal/modalStyle.module.css";
const Button = ({target, event, text, type}) => {
    return (
    <button className={type} onClick={()=>{event(target.current, styles.active)}}>{text}</button>
  )
}

export default Button