import styled from 'styled-components'
import { colors, sizes } from "../styles/variables";
import IconAlert from '../../assets/images/icon-alert.svg';

export const ChipsStyles = styled.div`
	display: flex;
	margin: 0 0.8rem;
	padding: 0.5rem 0.8rem;
	align-items: center;
	font-weight: bold;
	border-radius: ${sizes.borderRadiusS};

	&.error {
		background-color: ${colors.alertLight};

		&:after {
			display: inline-block;
			width: 1.3rem;
			height: 1.3rem;
			margin: 0 0 0 0.5rem;
			content: '';
			background: ${colors.alertDark} url(${IconAlert}) center center no-repeat;
			background-size: 0.146rem 0.618rem;
			border-radius: 50%;
		}
	}

	button {
		display: none;
		margin: 0 0 0 0.5rem;
		padding: 0;
		width: 1.3rem;
		height: 1.3rem;
		background-color: transparent;
		border: none;
		cursor: pointer;

		img {
			width: 1.3rem;
			height: 1.3rem;
		}
	}

	&:hover,
	&:active {
		background-color: ${colors.gray};

		&:after {
			display: none;
		}

		button {
			display: block;
		}
	}
	
`
