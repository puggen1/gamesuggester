import styled from 'styled-components';

export let InnerModal = styled.div`
	background-color: #213d46;
	width: 500px;
	border-radius: 5px;
	height: 300px;
`;

export let InputForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 1rem;
	height: 100%;
	max-width: 70%;
	margin: 0 auto;
	justify-content: center;
	@media screen and (max-width: 375px) {
		max-width: 90%;
	}
`;
