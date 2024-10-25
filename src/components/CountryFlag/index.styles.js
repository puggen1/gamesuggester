import styled from 'styled-components';

const CountryFlagImage = styled.img`
	max-height: 48px;
	max-width: 48px;
	display: block;
`;
const OuterFlag = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 35px;
	border-radius: 10px;
	overflow: hidden;
`;
export {CountryFlagImage, OuterFlag};
