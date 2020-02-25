import { IFlights } from "../../components/main/interfaces";

const POST_FLIGHTS_PENDING = '@flights/POST_FLIGHTS_PENDING';
const POST_FLIGHTS_FAILED = '@flights/POST_FLIGHTS_FAILED';
const POST_FLIGHTS_SUCCEEDED = '@flights/POST_FLIGHTS_SUCCEEDED';


interface IState {
	isFetching: boolean,
	hasErrors: boolean,
	response: IFlights[]
}

const INITIAL_STATE: IState = {
	isFetching: false,
	hasErrors: false,
	response: []
}

// export function getFlightsAction() {
// 	return async function (dispatch) {
// 		const getFlightsActionPending = {
// 			type: POST_FLIGHTS_PENDING,
// 			payload: []
// 		};
// 		dispatch(getFlightsActionPending);
// 		try {
// 			//POST
// 			const body = await fetch('https://api-voadora.dev.tegra.com.br/flight');
// 			const flights = await body.json()

// 			const getFlightsActionSucceeded = {
// 				type: POST_FLIGHTS_SUCCEEDED,
// 				payload: flights
// 			}
// 			dispatch(getFlightsActionSucceeded);

// 		} catch (e) {
// 			console.log('An error has ocurred: ', e)
// 			const getFlightsActionFailed = {
// 				type: POST_FLIGHTS_FAILED,
// 				payload: []
// 			}

// 			dispatch(getFlightsActionFailed);
// 		}
// 	}
// }

// export default function reducer(state = INITIAL_STATE, action) {
// 	switch (action.type) {
// 		case POST_FLIGHTS_PENDING: {
// 			return {
// 				...INITIAL_STATE,
// 				isFetching: true				
// 			}
// 		}
// 		case POST_FLIGHTS_FAILED: {
// 			return {
// 				...INITIAL_STATE,
// 				hasErrors: true
// 			}
// 		}
// 		case POST_FLIGHTS_SUCCEEDED: {
// 			return {
// 				...INITIAL_STATE,
// 				response: action.payload
// 			}
// 		}
// 		default:
// 			return state;
// 	}
// }
