const INITIAL_STATE = {
	availableFlights: 'none'
};

export function GoAction(){			
	return {
		type:'POST_HTTP_REQUEST_AVAILABLE_FLIGHTS',
		availableFlights: 'none' //???
	}
}

export default function reducer(state = INITIAL_STATE, action){	
	switch (action.type) {
		case 'POST_HTTP_REQUEST_AVAILABLE_FLIGHTS':{
			console.log('----------POST_HTTP_REQUEST_AVAILABLE_FLIGHTS')
			return{
				availableFlights: "no flights available"
			}
		}	
		default:{
			return state;
		}
	}
}
 