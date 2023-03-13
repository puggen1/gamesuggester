import { createContext, useState } from "react";


export const UserContext = createContext();

const User = (props)=>{
    const [loggedIn, setLoggedIn] = useState(null);

    return(
        <>
        <UserContext.Provider value={{loggedIn, setLoggedIn}}>
            {props.children}
        </UserContext.Provider>
        </>
    )
}


export default User