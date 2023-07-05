import { CountryFlagImage, OuterFlag } from "./index.styles"
const Countryflag = ({flag}) => {
  return (
    <OuterFlag>
    <CountryFlagImage  src={'https://www.countryflagicons.com/FLAT/48/' + flag + '.png'} alt={flag} />
    </OuterFlag>
  )
}

export default Countryflag