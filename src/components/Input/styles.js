import styled from 'styled-components'
import { colors } from "../styles/variables";

export const InputStyles = styled.input`
	width: auto;
	color: ${colors.black};
	border: none;
	letter-spacing: -0.032rem;

	&:focus-within {
		outline: none;
	}
`
