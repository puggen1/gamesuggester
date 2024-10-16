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

    /**
     * for login and logout
     */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [responseStatus, setResponseStatus] = useState(false)
    const emailChange = (event)=>{
        setEmail(event.target.value)
      }
      const passwordChange = (event)=>{
        setPassword(event.target.value)
      }
      const usernameChange = (event=>{
        setUsername(event.target.value);
      })

      const logout = ()=>{
        setLoggedIn(false)
        window.localStorage.setItem("userStatus", false);
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("refreshToken")
      }
      const loginUser = async (data)=>{
        let response = await sender("users/login", "POST", {email: data.email, password: data.password})
        if(!response.token){
          setResponseStatus(true)
          return false
        }
        else{
          setResponseStatus(false);
          localStorage.setItem("token", response.token);
          token.current = response.token

          localStorage.setItem("refreshToken", response.refreshToken);
          refreshToken.current = response.refreshToken

          localStorage.setItem("username", response.username);
          localStorage.setItem("userStatus", true)
          setLoggedIn(true)
          return true
        }
    }
    const registerUser =async (data, setModal)=>{
      let response = await sender("users/register", "POST", {email: data.email, password: data.password, username: data.username})
      if(response.uid){
        setResponseStatus(false)
        setModal("login")
        return true
      }
      else{
        setResponseStatus(true)
        return false
      }
    }


    return(
        <>
        <UserContext.Provider value={{setLoggedIn,loggedIn, loginUser, email, emailChange, password, passwordChange, usernameChange, username, logout, token, refreshToken, responseStatus, registerUser}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}


export default User