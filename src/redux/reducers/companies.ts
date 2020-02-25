const GET_COMPANIES_PENDING = '@companies/HTTP_GET_COMPANIES_PENDING';
const GET_COMPANIES_FAILED = '@companies/HTTP_GET_COMPANIES_FAILED';
const GET_COMPANIES_SUCCEEDED = '@companies/HTTP_GET_COMPANIES_SUCCEEDED';

const INITIAL_STATE: IState = {
	isFetching: false,
	hasErrors: false,
	response: []
}

interface IState {
	isFetching: boolean,
	hasErrors: boolean,
	response: ICompany[]
	
}

export interface ICompany {
	nome: string,
	aeroporto: string,
	cidade: string
}

	//Action responsible for fetching the API and adding its content to the state of the application
export function getCompaniesAction() {
	return async function (dispatch) {
			//For treating when data isnt yet been reached
		const getCompaniesActionPending = {
			type: GET_COMPANIES_PENDING,
			payload: []
		};
		dispatch(getCompaniesActionPending);
			//...
		try {
			const body = await fetch('https://api-voadora.dev.tegra.com.br/flight/companies');
			const companies = await body.json()
			const getCompaniesActionSucceeded = {
				type: GET_COMPANIES_SUCCEEDED,
					//An Array of airports
				payload: companies
			}
			dispatch(getCompaniesActionSucceeded);

		} catch (e) {
			console.log('An error has ocurred: ' + e)
			const getCompaniesActionFailed = {
				type: GET_COMPANIES_FAILED,
				payload: []
			}
			dispatch(getCompaniesActionFailed);
		}
	}
}

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
			//Not yet treated
		case GET_COMPANIES_PENDING: {
			return {
				...INITIAL_STATE,
				isFetching: true				
			}
		}
			//Not yet treated
		case GET_COMPANIES_FAILED: {
			return {
				...INITIAL_STATE,
				hasErrors: true
			}
		}
			//Returns array of companies
		case GET_COMPANIES_SUCCEEDED: {
			return {
				...INITIAL_STATE,
				response: action.payload
			}
		}
		default:
			return state;
	}
}
