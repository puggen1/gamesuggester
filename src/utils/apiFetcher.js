import url from "./baseUrl"
import cors from "./tempCors";
async function apiFetch(subUrl, data=null){
    let fullUrl =cors + url + subUrl;
    let method = "GET";
    let options = {
        method: method,
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
          },
    }
    if(data){
        options.method = "POST";
        options.body = JSON.stringify(data)
    }
    let result = await fetch(fullUrl, options)
    return await result.json()
}


export default apiFetch;