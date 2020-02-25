import React, { useState, useEffect } from 'react';
import * as ReactRedux from 'react-redux';
import '../../main/index.css';
import { getFromValue } from './../../../redux/reducers/from';

interface IProps {
	companies: any
}

function From(props: IProps) {
	const [fromValue, setFromValue] = useState();

	const dispatch = ReactRedux.useDispatch();

	useEffect(() => {
		dispatch(getFromValue())
	});

	console.log(fromValue);

	return (
		<>
			<label htmlFor="fromInput">From:</label>
			<select id="fromInput" className="inputs" onChange={setFromValue}>
				<option disabled selected hidden>Choose an airport...</option>

				{	//forEach loop (kinda)
					props.companies.map((company) => {
						return <option value={company.aeroporto}>{company.nome}</option>
					})
				}
			</select>
		</>
	);
}

export default From;
