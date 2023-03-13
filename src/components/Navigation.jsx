import React from 'react'
import { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({handleModalFunction, dataType, toggleModal}) => {
  return (
    <nav>
    <label className="navButton" onClick={(e)=>{handleModalFunction(dataType), toggleModal ? toggleModal(true): null}}> <FontAwesomeIcon icon={faBars}  /> </label>
    </nav>
  )
}

export default Navigation