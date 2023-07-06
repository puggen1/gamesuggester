import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navigation = ({setOpenDrawer}) => {
  return (
    <nav>
    <label className="navButton" onClick={(e)=>{setOpenDrawer(true)}}> <FontAwesomeIcon icon={faBars}  /> </label>
    </nav>
  )
}

export default Navigation