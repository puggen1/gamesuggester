import styled from "styled-components"
import Background from "./ModalBackground"
import modalToggler from "./modalToggler"
import styles from "./modalStyle.module.css"
import { useEffect } from "react"
let LoginModal = styled.div`
    background-color: #213D46;
    width: 500px;
    border-radius: 5px;
    height: 300px;
`

const Login = ({reference, target}) => {
  return (
    <Background onClick={()=>{modalToggler(target.current, styles.active)}} ref={reference}>
   <LoginModal>
    
   </LoginModal>
   </Background>
  )
}

export default Login