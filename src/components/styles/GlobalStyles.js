import styled, { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { colors, fonts } from "./variables";
 
export const GlobalStyle = createGlobalStyle`
	${normalize}

	html,
	body,
	#root {
		height: 100%;
	}

	html {
		font-family: ${fonts.body}
		font-size: 62.5%;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		margin: 0;
		padding: 0;
		background-color: ${colors.gray};
		font-size: 1.4rem;
		line-height: 1.8rem;
	}
`

export const Wrapper = styled.div`
	display: flex;
	width: 90%;
	max-width: 400px;
	min-height: 100%;
	margin: 0 auto;
	align-items: center;
`

export const Form = styled.form`
	width: 100%;
`