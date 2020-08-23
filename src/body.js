import React from 'react';
import Table_car from './table_car.js';

class Body extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		
		const car_list = [
			{model: "Старый седан", img: "../images/mark/BMW/3.jpg"},
			{model: "X3", img: "../images/mark/BMW/2.jpg"},
			{model: "Внедорожник", img: "../images/mark/BMW/1.jpg"},
			{model: "Новая машина", img: "../images/mark/BMW/4.jpg"},
			
		]
		
		return(
		<div className="grid-x grid-padding-x">
            <div className="cell medium-3 large-3 text-left">
				<ul>
					<li>
						<a href ="">BMW</a>
					</li>
					<li>
						<a href ="">Mercedes</a>
					</li>
					<li>
						<a href ="">Ford</a>
					</li>
					<li>
						<a href ="">Ваз</a>
					</li>
					<li>
						<a href ="">Toyota</a>
					</li>
				</ul>
			</div>
			
			<div className="cell medium-8 large-8">
           <Table_car mark="BMWs" cars={car_list} />
        </div>
			
		</div>
		);
	}
}

export default Body;
