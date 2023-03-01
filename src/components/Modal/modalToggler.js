let modalToggler = (modal, classname, event) =>{
    if(event.target.classList.contains("modalBackground") || event.target.classList.contains("modalButton")){
        modal.classList.toggle(classname)
    }
    else{
        return
    }
}

export default modalToggler