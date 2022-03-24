import React from 'react';
import { GlobalStyle, Wrapper, Form } from './components/styles/GlobalStyles';
import EmailToInput from "./components/EmailToInput";

function App() {
	return (
		<>
			<GlobalStyle />
			<Wrapper>
				<Form>
					<EmailToInput />
				</Form>
			</Wrapper>
		</>
	);
}

export default App;
