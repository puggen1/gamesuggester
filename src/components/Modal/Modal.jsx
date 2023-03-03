import Background from "./ModalBackground"

//changing from css toggle to return toggle to prop toggle
const Modal = ({status, modalFunction, type}) => {
  if(status){
    if(type === "login"){
    return (
      <Background onClick={(e)=>{modalFunction(e)}} className="modalBackground">
     <Login modalFunction={modalFunction} />
     </Background>
    )
  
  }  else if(type === "register"){
      return (
        <Background onClick={(e)=>{modalFunction(e)}} className="modalBackground">
          <Register modalFunction={modalFunction}/>
        </Background>
      )
  }
  else if(type === "add"){
      return(   
      <Background onClick={(e)=>{modalFunction(e)}} className="modalBackground">
      <AddGame/>
    </Background>
    )
  }
}else{
    return null
  }
 
}

export default Modal