import React from "react";
import Card_car from "./card_car.js"

class Table_car extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		
		const cars = this.props.cars.map((car) =>
			<div className="cell small-12 medium-6 large-4">
				<Card_car model={car.model} img={car.img} />
			</div>
		)
		
		return(
		<div>
		<h3>{this.props.mark}</h3>
			<div className="grid-x grid-padding-x">	
			{cars}
		</div>
	</div>
		);
	}
	
}





export default Table_car;