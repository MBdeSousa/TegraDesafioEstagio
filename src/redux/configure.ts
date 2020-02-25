import * as Redux from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import getCompaniesReducer from './reducers/companies';
// import getFlightsReducer from './reducers/flights';

const state = {
		//Matching actions to reducers
	companies: (state: any, action: any) => getCompaniesReducer(state, action),
	// flights: (state: any, action: any) => getFlightsReducer(state, action)
}
	//
const rootReducer = Redux.combineReducers(state);
const store = Redux.createStore(
	rootReducer,
	composeWithDevTools(Redux.applyMiddleware(ReduxThunk))
);

	//
export type IAppState = ReturnType<typeof rootReducer>;

export default store;
