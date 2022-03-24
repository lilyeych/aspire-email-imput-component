import React from 'react';
import { ChipsStyles } from './styles';
import IconClose from '../../assets/images/icon-close.svg';

function Chips(props) {

	function handleClick(event) {
		props.onClick(event)
	}

	return (
		<ChipsStyles className={props.status}>
			{props.value}
			<button className="icon" type="button" onClick={handleClick} >
				<img data-id={props.id} src={IconClose} alt="Close Icon" />
			</button>
		</ChipsStyles>
	);
}

export default Chips;