import React, { useState } from 'react';
import { InputStyles } from './styles'

function Input(props) {
	const [inputType] = useState(props.type)
	const [inputName] = useState(props.name)
	const inputValue = props.value


	function handleChange(event){
		props.onChange(event)
	}

	function handleKeyDown(event){
		props.onKeyDown(event)
	}

	return (
		<>
			<InputStyles type={inputType} value={inputValue} name={inputName} onChange={handleChange} onKeyDown={handleKeyDown} />
		</>
	);
}

export default Input;