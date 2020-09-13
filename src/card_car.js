import React from 'react';

class Card_car extends React.Component {
	
	constructor(props){
		super(props);}
		
		
	render(){
		return(
			<div className="card">
				<img src={this.props.img} />
					<div className="card-section">
						<p>{this.props.model}</p>
						<b>{this.props.prise}</b>
					</div>
			</div>
		);
	}
	
	
	
	
	
	
}



export default Card_car;