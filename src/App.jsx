import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import { Routes, Route } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./context/User";
import { ThemeProvider } from "@mui/material";
import ModalComp from "./components/Modal/Modal";
import Frontpage from "./components/Pages/Frontpage";
import Profile from "./components/Pages/Profile";
import Game from "./components/Pages/Game";
import "./assets/style/style.css"
import "./assets/style/buttons.css"
import { theme } from "./assets/style/theme";
function App() {
  /*
  /modal controls
  */
  let [modal, setModal] = useState("");
  let [modalStatus, setModalStatus] = useState(false);
  let [user, setUser] = useState(null);
  const {loggedIn, setLoggedIn} = useContext(UserContext)
  useEffect(()=>{
    let userStatus = localStorage.getItem("userStatus");
    if(userStatus){
      let token = localStorage.getItem("token");
      let username = localStorage.getItem("username");
      let profilePicture = "https://api.dicebear.com/5.x/initials/svg?backgroundType=gradientLinear&radius=10&seed=" + username;
      setUser({username, userStatus, token, profilePicture});
    }
    else{
      setUser(null);
    }
  },[loggedIn])
 
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <Header user={user} handleModalFunction={setModal} toggleModal={setModalStatus}/>
      <ModalComp type={modal} status={modalStatus} handleModalFunction={setModal} setModalStatus={setModalStatus}/>
      <Routes>
        <Route index element={<Frontpage/>}/>
        <Route path="profile" element={<Profile user={user}/>}/>
        <Route path="game/:name" element={<Game />}/>
        <Route path="*" element={<h1>404 not found</h1>}/>
      </Routes>
      <Footer/>
    </div>
    </ThemeProvider>
  )
}

export default App
