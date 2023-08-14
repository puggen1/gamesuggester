import {Alert, AlertTitle, Button, Typography, useTheme } from "@mui/material"
import { OuterAddGame } from "../Game/index.styles"
import useApiFetcher from "../../hooks/useApiFetcher"
import useSendData from "../../hooks/useSendData"
import { useEffect, useState } from "react"
import SteamGameSearch from "../SteamGameSearch"
import AddGameCard from "../Game/AddGameCard"
import { Clear, Check, Close} from "@mui/icons-material"
import { Link } from "react-router-dom"
const AddGame = () => {
  const theme = useTheme()
    const token = localStorage.getItem("token")
    const {data, isLoading, error} = useApiFetcher("steamgames", token)
    const [chosenGame, setChosenGame] = useState(null)
    const [singleGameUrl, setSingleGameUrl] = useState("") 
    const [noDuplicates, setNoDuplicates] = useState()
    const [success, setSuccess] = useState(false);
    const {data: chosenGameData, isLoading: chosenGameLoadingData, error: chosenGameErrorData} = useApiFetcher(singleGameUrl, token)
    const {sender} = useSendData()
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
    const cancel = ()=>{
      setChosenGame(null)
      setSuccess(false)
    }
    const confirm = async ()=>{
      console.log(chosenGameData)
      const response = await sender("games/add", "POST", {id:chosenGameData.appID}, token)
      console.log(response)
      if(response.success){
        setSuccess(true)
      }
      else{
        setSuccess(false)
      }
    }
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
          {!chosenGameLoadingData && <AddGameCard gameData={chosenGameData}/>}
        </div>}
{(chosenGame && !chosenGameLoadingData) && <div className="confirm">
      <Typography variant="h5" component="h2" color="white">3. Confirm</Typography>
      <div className="actionButtons">
          <Button sx={{backgroundColor:theme.palette.secondary.main, width:"150px"}} startIcon={<Clear color="warning"/>} color="warning" onClick={cancel}>Cancel</Button>
          <Button sx={{backgroundColor:theme.palette.secondary.main, width:"150px"}} startIcon={<Check color="warning"/>} color="warning" onClick={confirm}>Add game</Button>
          </div>
          {(success && chosenGame) &&
          <Alert severity="success">
            <AlertTitle>Game Added!</AlertTitle>
            {chosenGame.name} has been added! <strong><Link to={"/game/" + chosenGame.appID}>view game</Link></strong>
            <Button onClick={()=>{setSuccess(false)}}><Close /></Button>
          </Alert>
          }
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

          