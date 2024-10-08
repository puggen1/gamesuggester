import { OuterAddGame } from "../Game/index.styles"
import useApiFetcher from "../../hooks/useApiFetcher"
import AddGameContent from "../Game/AddGame"
import PlaceholderSkeleton from "../PlaceholderSkeleton"
/**
 * @description the add game page, it shows an form for adding games
 */
const AddGame = () => {
  //the token is used to validate you are logged in, limits the amount of times we use the external api, reduces cost.
  const token = localStorage.getItem("token")
  //gets the whole steam library
    const {data, isLoading, error} = useApiFetcher("steamgames", token)
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

          