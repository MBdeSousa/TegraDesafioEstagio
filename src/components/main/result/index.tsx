import React from 'react';
import '../../main/index.css';


interface IProps {
	flights: any
}
// props: IProps
function Result() {
	//DOM elements
	//TO DO - Remove hard code
	return (
		<>			
			<div className="resultContainer">
				<span className="price"><b>Total price: U$ 369.19</b></span>
				<span className="data">Arrival time: 7:00 pm</span>
				<span className="data">Departure time: 11:30 pm</span>
				<span className="data">Date of departure: Feb 10th, 2019</span>
				<span className="data">From: Aeroporto Internacional Juscelino Kubitschek</span>
				<span className="data">To: Aeroporto Internacional Hercílio Luz</span>
				<div className="flyButtonContainer">
					<button className="flyButton">Fly</button>
				</div>
			</div>
		</>
	);
}

export default Result;
