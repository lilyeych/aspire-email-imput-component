import styled from 'styled-components'
import { colors, sizes } from "../styles/variables";

export const MultiInputStyles = styled.div`
	display: flex;
	width: 100%;
	min-height: 5rem;
	overflow-x: hidden;
	align-items: center;
	background-color: ${colors.white};
	color: ${colors.black};
	border: none;
	border-radius: ${sizes.borderRadiusM};
	letter-spacing: -0.032rem;
`
