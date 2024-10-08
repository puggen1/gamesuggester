import { Typography } from '@mui/material'
import { OuterProfileStats } from './index.styles'
import { StatBox } from '../index.styles'
import Stat from '../Stat'
import CountryFlag from '../../CountryFlag'
const ProfileStats = ({gamesAdded, gamesVoted, joined, nationality}) => {
  return (
    <OuterProfileStats>
      { (typeof gamesAdded === 'number') &&  <StatBox>
            <Typography variant='h6'>Games Added</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{gamesAdded}</Typography>}/>
        </StatBox>}
        {gamesVoted &&<StatBox>
            <Typography variant='h6'>Games Voted</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{gamesVoted}</Typography>}/>
        </StatBox>}
        {nationality && <StatBox>
            <Typography variant='h6'>Nationality</Typography>
            <Stat stat={<CountryFlag flag={nationality} />}/>
        </StatBox>}
        {joined && <StatBox>
            <Typography variant='h6'>Joined</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{joined}</Typography>}/>
        </StatBox>}
     
    </OuterProfileStats>
  )
}

export default ProfileStats