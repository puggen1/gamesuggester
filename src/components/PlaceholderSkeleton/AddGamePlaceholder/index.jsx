import {Skeleton, Typography} from '@mui/material';

function AddGamePlaceholder() {
	return (
    <>
        <Skeleton
            sx={{margin: '0 auto'}}
            variant="text"
        >
            <Typography
                color="white"
                component="h1"
                textAlign="center"
                variant="h4"
            >
                Add a game
            </Typography>
        </Skeleton>

        <div className="search">
            <Skeleton variant="text">
                <Typography
                    color="white"
                    component="h2"
                    variant="h5"
                >
                    1. Search for a game
                </Typography>
            </Skeleton>

            <Skeleton
                height={50}
                variant="rectangular"
                width={250}
            />
        </div>
    </>
	);
}

export default AddGamePlaceholder;
