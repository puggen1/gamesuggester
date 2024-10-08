import { Skeleton } from '@mui/material'
import AddGamePlaceholder from './AddGamePlaceholder'
const PlaceholderSkeleton = (props) => {
  if(props.type === "addGame"){
    return (<AddGamePlaceholder/>)
  }
  else{
    return(<Skeleton>{props.children}</Skeleton>)
}
}

export default PlaceholderSkeleton
