import { Typography } from '@mui/material'
import { OuterProfileStats } from './index.styles'
import { StatBox } from '../index.styles'
import Stat from '../Stat'
import CountryFlag from '../../CountryFlag'
const ProfileStats = ({gamesAdded, GamesVoted, accAge, nationality}) => {
  return (
    <OuterProfileStats>
        <StatBox>
            <Typography variant='h6'>Games Added</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{gamesAdded}</Typography>}/>
        </StatBox>
        <StatBox>
            <Typography variant='h6'>Games Voted</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{GamesVoted}</Typography>}/>
        </StatBox>
        <StatBox>
            <Typography variant='h6'>Nationality</Typography>
            <Stat stat={<CountryFlag flag={nationality} />}/>
        </StatBox>
        <StatBox>
            <Typography variant='h6'>Joined</Typography>
            <Stat stat={<Typography variant='h6' fontWeight="300">{accAge}</Typography>}/>
        </StatBox>
     
    </OuterProfileStats>
  )
}

export default ProfileStats