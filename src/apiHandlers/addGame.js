import apiFetch from "../utils/apiFetcher";



const addGame = async (title, url, token, time)=>{
    const data = {
        title,
        url,
        date: time,
    }
    let result = await apiFetch("games/add", data, token,
    )
    return result
}


export default addGame