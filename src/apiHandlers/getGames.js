import apiFetch from "../utils/apiFetcher";
const getGames = async(title=null)=>{
    let url = "games";
    if(title){
        url += `?title=${title}}`
    }
    let result = await apiFetch(url)
    return result
}

export default getGames