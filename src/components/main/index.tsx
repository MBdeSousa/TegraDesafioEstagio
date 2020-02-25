import React, { useEffect } from 'react';
import * as ReactRedux from 'react-redux';
import { IAppState } from '../../redux/configure';
import { getCompaniesAction } from '../../redux/reducers/companies';
import From from './from';
import To from './to';
import When from './when';
import Go from './go';
import './index.css';
import Result from './result';
// import { getFlightsAction } from './../../redux/reducers/flights';

function Main() {
	const dispatch = ReactRedux.useDispatch();
		//Used for update store just one time
	useEffect(() => {
		dispatch(getCompaniesAction());
		
		// dispatch(postFlightsAction())
	}, []);

		//Returns the state of companies fetched by API
	const companiesState = ReactRedux.useSelector((state: IAppState) => {
		return state.companies.response;
	});
	// const flightsState = ReactRedux.useSelector((state: IAppState) => {
	// 	return state.flights.response;
	// });

	//Elements rendered in DOM
return (

	<>
		<div className="firstRow">
			<From companies={companiesState} />
			<To companies={companiesState} />

			<div className="secondRow">
				<When />
				<Go />
			</div>
		</div>
		<Result />
		{/* <Result flights={flightsState}/> */}
	</>
);
}

export default Main;


