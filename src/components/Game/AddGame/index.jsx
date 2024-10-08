import React, { useState, useEffect } from "react"
import {Snackbar,Alert,AlertTitle, Button, Typography, useTheme } from "@mui/material"

import useApiFetcher from "../../../hooks/useApiFetcher"
import useSendData from "../../../hooks/useSendData"
import SteamGameSearch from "../../SteamGameSearch"
import AddGameCard from "../AddGameCard"
import { Clear, Check, Close} from "@mui/icons-material"
import { Link, useNavigate } from "react-router-dom"
import ConfirmGameSkeleton from "../../PlaceholderSkeleton/ConfirmGameSkeleton"
import AlreadyAdded from "../AlreadyAdded"
/**
 * 
 * @param {array} data, all the steam games fetched on addgame page 
 * @description  
 */
const AddGame = ({data}) => {
    const navigate = useNavigate()
    const theme = useTheme()
    const token = localStorage.getItem("token")
    const [chosenGame, setChosenGame] = useState(null)
    const [singleGameUrl, setSingleGameUrl] = useState("") 
    const [duplicateUrl, setDuplicateUrl] = useState("");
    const [noDuplicates, setNoDuplicates] = useState()
    const [success, setSuccess] = useState(false);
    const [isOpen, setIsOpen] = useState(false)
    const {data: chosenGameData, isLoading: chosenGameLoadingData, error: chosenGameErrorData} = useApiFetcher(singleGameUrl, token)
    const {data: isDuplicateData, isLoading: isDuplicateDataLoading, error: isDuplicateDataError} = useApiFetcher(duplicateUrl)
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
        //check if game already excists...
        setDuplicateUrl("games/" + chosenGame.appID);
        setSingleGameUrl("steamgames/"+chosenGame.appID);
      }
    }, [chosenGame])
    /**
     * @description cancels the procces, removing the states
     */
    const cancel = ()=>{
      setChosenGame(null)
      setSuccess(false)
      setIsOpen(false)
    }

    /**
     * @description adds the game to the database, either add new or adds the user to the liked array
     */
    const confirm = async ()=>{
      const response = await sender("games/add", "POST", {id:chosenGameData.appID}, token)
      if(response.success){
        setSuccess(true)
        setIsOpen(true)
      }
      else{
        setSuccess(false)
      }
    }
   
  return (
    (noDuplicates && noDuplicates.length > 0) &&
        <>
        <Typography variant="h4" component="h1" color="white" textAlign="center">Add a game</Typography>
        <div className="search">
          <Typography variant="h5" component="h2" color="white">1. Search for a game</Typography>
          <SteamGameSearch noDuplicates={noDuplicates} setChosenGame={setChosenGame} chosenGame={chosenGame}/>
        </div>
        {chosenGame && <div className="validate">
          <Typography variant="h5" component="h2" color="white">2. Look trough the game</Typography>
          {(chosenGameLoadingData && isDuplicateDataLoading) &&  <ConfirmGameSkeleton/>}
          {(isDuplicateData.found && !isDuplicateDataLoading) && <AlreadyAdded data={isDuplicateData}/>}
          {chosenGameErrorData && <p>test error</p>}
          {(!chosenGameLoadingData && !isDuplicateData.found) && <AddGameCard gameData={chosenGameData}/>}
        </div>}
{((chosenGame && !chosenGameLoadingData) && (!isDuplicateData.found && !isDuplicateDataLoading)) &&<> <div className="confirm">
      <Typography variant="h5" component="h2" color="white">3. Confirm</Typography>
      <div className="actionButtons">
          <Button sx={{backgroundColor:theme.palette.secondary.main, width:"150px"}} startIcon={<Clear color="warning"/>} color="warning" onClick={cancel}>Cancel</Button>
          <Button sx={{backgroundColor:theme.palette.secondary.main, width:"150px"}} startIcon={<Check color="warning"/>} color="warning" onClick={confirm}>Add game</Button>
          </div>
        </div>
         <Snackbar open={isOpen}
         autoHideDuration={10000}
         onClose={cancel}>
            <Alert severity="success">
           <AlertTitle>Game Added!</AlertTitle>
           {chosenGame?.name ? chosenGame.name : ""} has been added! <strong><Link to={"/game/" + chosenGame.appID}>view game</Link></strong>
           <Button onClick={()=>{cancel()}}><Close /></Button>
         </Alert>
         </Snackbar>
        </>
        }
       
          </>
  )
}

export default AddGame