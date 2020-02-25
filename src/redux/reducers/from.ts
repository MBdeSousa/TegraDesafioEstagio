const GET_FROM_VALUE_SUCCEEDED = '@companies/HTTP_GET_FROM_VALUE_SUCCEEDED';

const INITIAL_STATE: IState = {
	fromValue: ''
}

interface IState {
	fromValue: string	
}

	//Action responsible for fetching the API and adding its content to the state of the application
export function getFromValueAction(value) {
	return async function (dispatch) {	

			const getFromValueActionSucceeded = {
				type: GET_FROM_VALUE_SUCCEEDED,
				payload: value
			}
			dispatch(getFromValueActionSucceeded);	
		}
	}
}

export default function reducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case GET_FROM_VALUE_SUCCEEDED: {
			return {
				...INITIAL_STATE,
				response: action.payload
			}
		}
		default:
			return state;
	}
}
