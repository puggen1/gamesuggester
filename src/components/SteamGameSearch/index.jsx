import { useState } from "react"
import { Autocomplete, TextField } from "@mui/material"
import { OuterSteamGameSearch } from "./index.styles"
const SteamGameSearch = ({noDuplicates, setChosenGame, chosenGame}) => {
    const [input, setInput] = useState(null)
  return (
    <OuterSteamGameSearch>
    <Autocomplete options={noDuplicates}
    disablePortal
    getOptionLabel={(option)=>{return option.name}}
    renderOption={(props, option)=>{return <li {...props} key={option.appID}>{option.name} </li>}}
    renderInput={(params) => <TextField {...params} label="Games" />}
    onChange={(event, value)=>{setChosenGame(value)}}
    value={chosenGame}
    inputValue={input}
    onInputChange={(event, value)=>{setInput(value)}}
      />
    </OuterSteamGameSearch>
  )
}

export default SteamGameSearch