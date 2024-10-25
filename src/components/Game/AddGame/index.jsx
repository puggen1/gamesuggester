import {useState, useEffect} from 'react';
import {Snackbar, Alert, AlertTitle, Button, Typography, useTheme} from '@mui/material';

import useApiFetcher from '../../../hooks/useApiFetcher';
import useSendData from '../../../hooks/useSendData';
import SteamGameSearch from '../../SteamGameSearch';
import AddGameCard from '../AddGameCard';
import {Clear, Check, Close} from '@mui/icons-material';
import {Link} from 'react-router-dom';
import ConfirmGameSkeleton from '../../PlaceholderSkeleton/ConfirmGameSkeleton';
import AlreadyAdded from '../AlreadyAdded';
/**
 *
 * @param {array} data, all the steam games fetched on addgame page
 * @description
 */
function AddGame({data}) {
	const theme = useTheme();
	const token = localStorage.getItem('token');
	const [chosenGame, setChosenGame] = useState(null);
	const [singleGameUrl, setSingleGameUrl] = useState('');
	const [duplicateUrl, setDuplicateUrl] = useState('');
	const [noDuplicates, setNoDuplicates] = useState();
	// eslint-disable-next-line no-unused-vars
	const [success, setSuccess] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const {data: chosenGameData, isLoading: chosenGameLoadingData, error: chosenGameErrorData} = useApiFetcher(singleGameUrl, token);
	const {data: isDuplicateData, isLoading: isDuplicateDataLoading} = useApiFetcher(duplicateUrl);
	const {sender} = useSendData();

	//removes duplicates from the data
	useEffect(() => {
		if (data) {
			const seen = {};
			setNoDuplicates(
				data.filter((game) => {
					if (!Object.prototype.hasOwnProperty.call(seen, game.appID)) {
						seen[game.appID] = true;
						return true;
					} else {
						return false;
					}
				})
			);
		}
	}, [data]);
	useEffect(() => {
		if (chosenGame) {
			//check if game already excists...
			setDuplicateUrl('games/' + chosenGame.appID);
			setSingleGameUrl('steamgames/' + chosenGame.appID);
		}
	}, [chosenGame]);
	/**
	 * @description cancels the procces, removing the states
	 */
	const cancel = () => {
		setChosenGame(null);
		setSuccess(false);
		setIsOpen(false);
	};

	/**
	 * @description adds the game to the database, either add new or adds the user to the liked array
	 */
	const confirm = async () => {
		const response = await sender('games/add', 'POST', {id: chosenGameData.appID}, token);
		if (response.success) {
			setSuccess(true);
			setIsOpen(true);
		} else {
			setSuccess(false);
		}
	};

	return (
		noDuplicates &&
		noDuplicates.length > 0 && (
			<>
				<Typography color="white" component="h1" textAlign="center" variant="h4">
					Add a game
				</Typography>

				<div className="search">
					<Typography color="white" component="h2" variant="h5">
						1. Search for a game
					</Typography>

					<SteamGameSearch chosenGame={chosenGame} noDuplicates={noDuplicates} setChosenGame={setChosenGame} />
				</div>

				{chosenGame ? (
					<div className="validate">
						<Typography color="white" component="h2" variant="h5">
							2. Look trough the game
						</Typography>

						{chosenGameLoadingData && isDuplicateDataLoading ? <ConfirmGameSkeleton /> : null}

						{isDuplicateData.found && !isDuplicateDataLoading ? <AlreadyAdded data={isDuplicateData} /> : null}

						{chosenGameErrorData ? <p>test error</p> : null}

						{!chosenGameLoadingData && !isDuplicateData.found && <AddGameCard gameData={chosenGameData} />}
					</div>
				) : null}

				{chosenGame && !chosenGameLoadingData && !isDuplicateData.found && !isDuplicateDataLoading ? (
					<>
						{' '}
						<div className="confirm">
							<Typography color="white" component="h2" variant="h5">
								3. Confirm
							</Typography>

							<div className="actionButtons">
								<Button
									color="warning"
									onClick={cancel}
									startIcon={<Clear color="warning" />}
									sx={{
										backgroundColor: theme.palette.secondary.main,
										width: '150px',
									}}>
									Cancel
								</Button>

								<Button
									color="warning"
									onClick={confirm}
									startIcon={<Check color="warning" />}
									sx={{
										backgroundColor: theme.palette.secondary.main,
										width: '150px',
									}}>
									Add game
								</Button>
							</div>
						</div>
						<Snackbar autoHideDuration={10000} onClose={cancel} open={isOpen}>
							<Alert severity="success">
								<AlertTitle>Game Added!</AlertTitle>
								{chosenGame?.name ? chosenGame.name : ''} has been added!{' '}
								<strong>
									<Link to={'/game/' + chosenGame.appID}>view game</Link>
								</strong>
								<Button
									onClick={() => {
										cancel();
									}}>
									<Close />
								</Button>
							</Alert>
						</Snackbar>
					</>
				) : null}
			</>
		)
	);
}

export default AddGame;
