import { Autocomplete, TextField } from "@mui/material"
import useApiFetcher from "../../hooks/useApiFetcher"
const AddGame = () => {
    const token = localStorage.getItem("token")
    const {data, isLoading, error} = useApiFetcher("steamgames", token) 
 
  return (
    <div>
        {isLoading && <p>loading</p>}
        {error && <p>error</p>}
        {Object.keys(data).length > 0 &&
        <Autocomplete options={data}
         disablePortal
         getOptionLabel={(option)=>{return option.name}}
         renderOption={(props, option)=>{return <li {...props} key={option.appId}>{option.name} </li>}}
         renderInput={(params) => <TextField {...params} label="Games" />}
           />}
    </div>
  )
}

export default AddGame