import { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

const User = (props)=>{
 
    const localstorageStatus = window.localStorage.getItem("userStatus")
    const [loggedIn, setLoggedIn] = useState(localstorageStatus === "true" ? true: false);
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
        setLoggedIn(false);
        window.localStorage.setItem("userStatus", false);
        window.localStorage.removeItem("username")
        window.localStorage.removeItem("token")
      }
    return(
        <>
        <UserContext.Provider value={{loggedIn, setLoggedIn, email, emailChange, password, passwordChange, usernameChange, username, Logout}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}


export default User