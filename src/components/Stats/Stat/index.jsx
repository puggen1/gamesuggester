import { Typography } from '@mui/material'
import { OuterStat } from './index.styles'

const Stat = ({stat}) => {
  return (
    <OuterStat>
        {stat}
    </OuterStat>
  )
}

export default Stat