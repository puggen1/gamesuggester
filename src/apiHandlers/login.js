import apiFetch from "../utils/apiFetcher"
const login = async (email, password) =>{
    let response = await apiFetch("users/login", {email, password});
    return response
}


export default login