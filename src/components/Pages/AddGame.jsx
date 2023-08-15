import { OuterAddGame } from "../Game/index.styles"
import useApiFetcher from "../../hooks/useApiFetcher"
import AddGameContent from "../Game/AddGame"
import PlaceholderSkeleton from "../PlaceholderSkeleton"
const AddGame = () => {
  const token = localStorage.getItem("token")
    const {data, isLoading, error} = useApiFetcher("steamgames", token)
   console.log(data)
    return (<>
    <OuterAddGame>
      {isLoading && <PlaceholderSkeleton type="addGame"></PlaceholderSkeleton>}
      {error && <p>error</p>}
      {data.length > 0 &&<AddGameContent data={data}/>}
    </OuterAddGame>
    </>
  )
}

export default AddGame
/**
 * <Autocomplete options={data}
         disablePortal
         getOptionLabel={(option)=>{return option.name}}
         renderOption={(props, option)=>{return <li {...props} key={option.appId}>{option.name} </li>}}
         renderInput={(params) => <TextField {...params} label="Games" />}
           />
 */

          