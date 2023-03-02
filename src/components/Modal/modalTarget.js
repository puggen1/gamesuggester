let modalTarget = (event) =>{

    if(event.target.classList.contains("modalBackground") || event.target.classList.contains("modalButton")){
        return true
    }
    else{
        return false
    }
}

export default modalTarget