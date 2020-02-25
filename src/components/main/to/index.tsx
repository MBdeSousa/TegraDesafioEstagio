import React from 'react';
import '../../main/index.css';

interface IProps {
	companies: any
}

function To(props: IProps) {
		//DOM elements
	return (
		<>
			<label htmlFor="toField" >To:</label>
			<select id="toField" className="inputs" tabIndex={2}>
				<option disabled selected hidden>Choose an airport...</option>
				{ 	//Responsible for mapping companies
					props.companies.map((company) => {
						return <option value={company.aeroporto}>{company.nome}</option>
					})
				}
			</select>
			<label htmlFor="">When:</label>
		</>
	);
}

export default To;