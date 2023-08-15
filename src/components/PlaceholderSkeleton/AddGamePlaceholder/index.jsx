import { Autocomplete, Skeleton, Typography } from "@mui/material"

const AddGamePlaceholder = () => {
  return (
   <>
    <Skeleton variant="text" sx={{margin:"0 auto"}}><Typography variant="h4" component="h1" color="white" textAlign="center">Add a game</Typography></Skeleton>
    <div className="search">
          <Skeleton variant="text"><Typography variant="h5" component="h2" color="white">1. Search for a game</Typography></Skeleton>
           <Skeleton variant="rectangular" width={250} height={50}>
           </Skeleton>
        </div>
   </>
  )
}

export default AddGamePlaceholder