import { createContext, useEffect, useRef, useState } from "react";
import useSendData from "../hooks/useSendData";
export const UserContext = createContext();

const User = (props)=>{
  const {sender} = useSendData()

/**
 * user things to not need updating storage
 */
  const localstorageStatus = window.localStorage.getItem("userStatus")
  const token = useRef(window.localStorage.getItem("token"))
  const refreshToken = useRef(window.localStorage.getItem("refreshToken"))
  const [loggedIn, setLoggedIn] = useState(localstorageStatus === "true" ? true: false);

    useEffect(()=>{
      //it should call the refresh endpoint to get new token and set it in localstorage
      if(loggedIn && token?.current?.length > 0){
      (async ()=>{
        const body = {
          "refreshToken":refreshToken.current
        }
        const response = await sender("users/refreshtoken", "POST", body, token.current)
        if(response.token){
          token.current = response.token
        }
      })()
    }},[])
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const emailChange = (event)=>{
        setEmail(event.target.value)
      }
      const passwordChange = (event)=>{
        setPassword(event.target.value)
      }
      const usernameChange = (event=>{
        setUsername(event.target.value);
      })

      const Logout = ()=>{
        setLoggedIn(false)
        window.localStorage.setItem("userStatus", false);
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("refreshToken")
      }
    return(
        <>
        <UserContext.Provider value={{setLoggedIn,loggedIn, email, emailChange, password, passwordChange, usernameChange, username, Logout, token, refreshToken}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}


export default User