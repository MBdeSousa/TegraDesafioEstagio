import React from 'react';
import '../../main/index.css';

function Go() {
		//TODO - Get data from user inputs and POST on API
	function handleClick(){
		console.log('"Go" button were pressed.')
	}
		//DOM elements
	return (
		<>
			<button onClick={handleClick} className="goButton">Go</button>
		</>
	);
}

export default Go;