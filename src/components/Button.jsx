import React from 'react'
import styles from "./Modal/modalStyle.module.css";
const Button = ({target, event, text, type}) => {
    return (
    <button className={type} onClick={(e)=>{event(target.current, styles.active, e)}}>{text}</button>
  )
}

export default Button