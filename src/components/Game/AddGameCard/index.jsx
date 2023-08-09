import { Typography, Link} from "@mui/material";
import { OuterAddGameCard } from "./index.styles";
const AddGameCard = ({gameData}) => {
    const {name, header_image, short_description, appID} = gameData
    const steamUrl = "https://store.steampowered.com/app/" + appID;
  return (
    <OuterAddGameCard>
        <Typography className="gameTitle" component="h3" variant="body1">{name}</Typography>
        <Link className="steamLink" variant="body1"  href={steamUrl} target="_blank">Steam Link</Link>
        <img className="image" src={header_image} alt={name + `'s image`}/>
        <Typography className="description" variant="body2" component="p">{short_description}</Typography>
    </OuterAddGameCard>    
  )
}

export default AddGameCard