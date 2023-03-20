import apiFetch from "../utils/apiFetcher"

const register = async (email, password, username)=>{
    const data = {email, password, username}
    const response = await apiFetch("users/create", data)
    return response
}

export default register