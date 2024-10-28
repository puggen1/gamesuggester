import {CountryFlagImage, OuterFlag} from './index.styles';
function Countryflag({flag}) {
	return (
		<OuterFlag>
			<CountryFlagImage alt={flag} src={'https://www.countryflagicons.com/FLAT/48/' + flag + '.png'} />
		</OuterFlag>
	);
}

export default Countryflag;
