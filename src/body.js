import React from 'react';

class Body extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
		<div className="grid-x grid-padding-x">
  <div className="cell medium-8 large-8">12/6/4 cells</div>
  <div className="cell medium-4 large-4">12/6/8 cells</div>
</div>
		);
	}
}

export default Body;
