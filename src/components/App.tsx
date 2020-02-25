import React from 'react';
import * as ReactRedux from 'react-redux';
import Main from './main';
import Store from '../redux/configure';
import logo from '../assets/images/logo.png';
import './App.css';

function App() {
		//DOM elements
	return (
			//Responsible for allowing all components inside to use the Store
		<ReactRedux.Provider store={Store}>
			<div className="App">
				<header>
					<img src={logo} alt="Logo" />
				</header>
				<Main />
			</div>
		</ReactRedux.Provider>
	);
}

export default App;
