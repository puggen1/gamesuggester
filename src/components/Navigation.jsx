import React from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
  let navigation = useRef(null)
  return (
    <nav>
    <label className="navButton" onClick={() =>{
      //probably the wrong way of doing this, but i can target the useref navigation.current to trigger evetns on the navigation???
      //navigation.current.innerHTML = ""
    }}> <FontAwesomeIcon icon={faBars}  /> </label>
    <div ref={navigation} id='navigation'></div>
    </nav>
  )
}

export default Navigation