import React from 'react';


class Car_description extends React.Component {
	
	constructor(props){
		super(props);}
		
		render(){
		return(
			<div class="grid-x grid-padding-x small-up-2 medium-up-4 large-up-6">
  <div className="cell">Картинка</div>
  <div className="cell">Название</div>
  <div className="cell">Цена</div>
  <div className="cell">Мощность</div>
  <div className="cell">Описание</div>
  <div className="cell">Особенности</div>
</div>
		)	
		}
}
export default Car_description;