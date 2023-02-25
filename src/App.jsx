import Footer from "./components/Footer"
import Header from "./components/Header/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Frontpage from "./components/Pages/Frontpage";
import Profile from "./components/Pages/Profile";
import Game from "./components/Pages/Game";

function App() {
  let userStatus = localStorage.getItem("userStatus");
  let user;
  if(userStatus){
    let token = localStorage.getItem("token");
    let username = localStorage.getItem("username");
    let profilePicture = "https://api.dicebear.com/5.x/initials/svg?backgroundType=gradientLinear&radius=10&seed=" + username;
    user = {
      username,
      userStatus,
      token,
      profilePicture
    }
  }
  else{
    user = false;
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Header user={user}/>
      <Routes>
        <Route index element={<Frontpage/>}/>
        <Route path="profile" element={<Profile user={user}/>}/>
        <Route path="game" element={<Game />}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
    </div>
  )
}

export default App
