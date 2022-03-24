import React from 'react';
import { GlobalStyle, Wrapper, Form } from './components/styles/GlobalStyles';
import MultiEmailInput from "./components/MultiEmailInput";

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Form>
					<MultiEmailInput />
				</Form>
			</Wrapper>
		</>
	);
}

export default App;
