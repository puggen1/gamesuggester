import { createContext, useState } from "react";


export const UserContext = createContext();

const User = (props)=>{
    const localstorageStatus = window.localStorage.getItem("userStatus")
    const [loggedIn, setLoggedIn] = useState(localstorageStatus);
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
    return(
        <>
        <UserContext.Provider value={{loggedIn, setLoggedIn, email, emailChange, password, passwordChange, usernameChange, username}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}


export default User