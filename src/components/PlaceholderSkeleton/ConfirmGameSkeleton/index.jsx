import { OuterAddGameCard } from "../../Game/AddGameCard/index.styles"
import { Skeleton , Typography} from "@mui/material"
const ConfirmGameSkeleton = () => {
  return (
    <OuterAddGameCard>
         <Skeleton className="gameTitle"  variant="text"><Typography component="h3" variant="body1">placeholder</Typography></Skeleton>
        <Skeleton className="steamLink" variant="text"><Typography>Steam Link</Typography></Skeleton>
        <Skeleton variant="rounded" className="image" height={250}><img  /></Skeleton>
        <Skeleton variant="rounded" className="description" width={250}><Typography  variant="body2" component="p" >placeholder</Typography></Skeleton>
    </OuterAddGameCard>
  )
}

export default ConfirmGameSkeleton