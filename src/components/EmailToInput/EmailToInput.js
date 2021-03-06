import React, { useState } from 'react';
import Input from "../Input";
import Chips from "../Chips";
import { EmailToInputStyles } from './styles'

function EmailToInput(props) {
	const [inputValue, setInputValue] = useState('')
	const [emails, setEmails] = useState([]);

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleKeyDown(event) {
		if (['Enter', 'Tab'].includes(event.key)) {
			event.preventDefault();
			
			var email = event.target.value.trim();
			
			if (email) {
				if (isValid(email)) {
					setEmails([
						...emails,
						{
							id: emails.length,
							email: email,
							status: "valid"
						}
					]);
				} else {
					setEmails([
						...emails,
						{
							id: emails.length,
							email: email,
							status: "error"
						}
					]);
				}
				setInputValue('');
			}
		}
	}

	function handleDelete(event) {
		let deletedEmailID = Number(event.target.dataset.id);
		setEmails(emails.filter(email => email.id !== deletedEmailID));
	}

	function isValid(email) {
		if (!isEmail(email) || isInList(email)) {
			return false;
		}
		return true;
	}

	function isEmail(email) {
		return /[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/.test(email);
	}

	function isInList(email) {
		return emails.includes(email);
	}
	
	return (
		<>
			<EmailToInputStyles>
					{emails.map(email => (
					<Chips key={email.id} id={email.id} status={email.status} value={email.email} onClick={handleDelete}></Chips>
					))}
				<Input type="email" name="emails" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown} />
			</EmailToInputStyles>
		</>
	);
}

export default EmailToInput;