import {useState} from 'react';
import {Autocomplete, TextField} from '@mui/material';
import {OuterSteamGameSearch} from './index.styles';
function SteamGameSearch({noDuplicates, setChosenGame, chosenGame}) {
	const [input, setInput] = useState('');

	return (
		<OuterSteamGameSearch>
			<Autocomplete
    disablePortal
    getOptionLabel={(option) => {
					return option.name;
				}}
    inputValue={input}
    onChange={(event, value) => {
					setChosenGame(value);
				}}
    onInputChange={(event, value) => {
					setInput(value);
				}}
    options={noDuplicates}
    renderInput={(params) => <TextField {...params} label="Find game" />}
    renderOption={(props, option) => {
					return (
						<li {...props} key={option.appID}>
							{option.name}{' '}
						</li>
					);
				}}
    sx={{}}
    value={chosenGame}
			/>
		</OuterSteamGameSearch>
	);
}

export default SteamGameSearch;
