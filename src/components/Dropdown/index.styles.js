import styled from 'styled-components';
const OuterDropdown = styled.div`
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(45deg);
		}
	}
	width: 100%;

	button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		border-radius: 0px;
		transition: border-radius 0.2s ease-in-out;
		box-shadow: none;
	}
	.mainButton {
		border-radius: 10px;
	}
	.open {
		border-radius: 10px 10px 0px 0px;
	}
	.dropdownContent {
		max-height: 0;
		overflow: hidden;
		transition: max-height 0.2s ease-in-out;
	}
	.showContent {
		width: 100%;
		max-height: 250px;
	}
	.dropdownContent > .dropdownItem:last-of-type > button {
		border-radius: 0px 0px 10px 10px;
	}
	.rotate {
	}
	.mainButton:hover {
		.rotate {
			animation: rotate 0.2s ease-in-out forwards 1;
		}
	}
	.dropdownItem {
		&:nth-child(even) {
			border-top: solid 1px #2f4e5c;
			border-bottom: solid 1px #2f4e5c;
		}
		//first dropdownItem
		&:first-child {
			border-top: solid 1px #2f4e5c;
		}
		&:last-child {
			border-bottom: none;
		}
	}
`;

export {OuterDropdown};
