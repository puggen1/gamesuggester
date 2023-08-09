import { Autocomplete, TextField,Button, Typography } from "@mui/material"
import { OuterAddGame } from "../Game/index.styles"
import useApiFetcher from "../../hooks/useApiFetcher"
import { useEffect, useState } from "react"
import SteamGameSearch from "../SteamGameSearch"
import AddGameCard from "../Game/AddGameCard"
const AddGame = () => {
    const token = localStorage.getItem("token")
    const {data, isLoading, error} = useApiFetcher("steamgames", token)
    const [chosenGame, setChosenGame] = useState(null)
    const [singleGameUrl, setSingleGameUrl] = useState("") 
    const [noDuplicates, setNoDuplicates] = useState()
    const {data: chosenGameData, isLoading: chosenGameLoadingData, error: chosenGameErrorData} = useApiFetcher(singleGameUrl, token)
    //removes duplicates from the data
    useEffect(() => {
      if(data){
        const seen = {}
        setNoDuplicates(data.filter((game)=>{
            if(!seen.hasOwnProperty(game.appID)){
              seen[game.appID] = true
              return true}
            else{
              return false
            }
        }))
      }
    }, [data])
    useEffect(() => {
      if(chosenGame){
        setSingleGameUrl("steamgames/"+chosenGame.appID)
      }
    }, [chosenGame])
    return (
    <OuterAddGame>
        {isLoading && <p>loading</p>}
        {error && <p>error</p>}
        {(noDuplicates && noDuplicates.length > 0) &&
        <>
        <Typography variant="h4" component="h1" color="white" textAlign="center">Add a game</Typography>
        <div className="search">
          <Typography variant="h5" component="h2" color="white">1. Search for a game</Typography>
          <SteamGameSearch noDuplicates={noDuplicates} setChosenGame={setChosenGame} chosenGame={chosenGame}/>
        </div>
        {chosenGame && <div className="validate">
          <Typography variant="h5" component="h2" color="white">2. Look trough the game</Typography>
          <AddGameCard gameData={chosenGameData}/>
        </div>}
{chosenGame && <div className="confirm">
      <Typography variant="h5" component="h2" color="white">3. Confirm</Typography>
          <Button>Cancel</Button>
          <Button>Add game</Button>
        </div>}
          </>
        }
    </OuterAddGame>
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

          