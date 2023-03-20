import React from 'react'
import { useRef, useContext } from 'react'
import { ModalContext } from '../context/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({dataType}) => {
  const {setModal, setModalStatus} = useContext(ModalContext)
  return (
    <nav>
    <label className="navButton" onClick={(e)=>{setModal(dataType), setModalStatus ? setModalStatus(true): null}}> <FontAwesomeIcon icon={faBars}  /> </label>
    </nav>
  )
}

export default Navigation