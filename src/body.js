import React from 'react';
import Table_car from './table_car.js';
import {
BrowserRouter as Router,
Switch,
Route,
Link
}from "react-router-dom";

class Body extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		
		const car_list_bmw = [
			{model: "Старый седан", img: "../images/mark/BMW/3.jpg"},
			{model: "X3", img: "../images/mark/BMW/2.jpg"},
			{model: "Внедорожник", img: "../images/mark/BMW/1.jpg"},
			{model: "Новая машина", img: "../images/mark/BMW/4.jpg"},
			
		]
		
		
		const car_list_ford = [
			{model: "Mustang", img: "../images/mark/ford/Mustang.jpg"},
			{model: "miniwen", img: "../images/mark/ford/miniwen.jpg"},
			{model: "mondeno", img: "../images/mark/ford/mondeno.jpg"},
			{model: "ranger", img: "../images/mark/ford/ranger.jpg"},
			
		]
		
		
		const car_list_vaz = [
			{model: "Грузовой Ваз", img: "../images/mark/ВАЗ/Грузовой_Ваз.jpg"},
			{model: "Классический Ваз", img: "../images/mark/ВАЗ/Классический_Ваз.jpg"},
			{model: "Постапокалептический Ваз", img: "../images/mark/ВАЗ/Постапокалептический_Ваз.jpg"},
			{model: "Сверх кастомный Ваз", img: "../images/mark/ВАЗ/Сверх_кастомный_Ваз.jpg"},
			
		]
		
		const car_list_toyota = [
			{model: "camry", img: "../images/mark/toyota/camry.jpg"},
			{model: "supra", img: "../images/mark/toyota/supra.jpg"},
			{model: "land cruiser", img: "../images/mark/toyota/land_cruiser.jpg"},
			{model: "prototipe", img: "../images/mark/toyota/prototipe.jpg"},
			
		]
		
		
		const car_list_mercedes = [
			{model: "electro car", img: "../images/mark/mercedes/electro_car.jpg"},
			{model: "light car", img: "../images/mark/mercedes/light_car.jpg"},
			{model: "supper car", img: "../images/mark/mercedes/supper_car.jpg"},
			{model: "Как это сюда попало?", img: "../images/mark/mercedes/kak_eto_suda_popalo.jpg"},
			
		]
		
		const car_list_BUHANKA = [
			{model: "КЛАССИЧЕСКАЯ БУХАНКА", img: "../images/mark/БУХАНКА/КЛАССИЧЕСКАЯ_БУХАНКА.jpg"},
			{model: "ГРУЗОВАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ГРУЗОВАЯ_БУХАНКА.jpg"},
			{model: "СКОРАЯ БУХАНКА", img: "../images/mark/БУХАНКА/СКОРАЯ_БУХАНКА.jpg"},
			{model: "БУХАНКА ДЖИП", img: "../images/mark/БУХАНКА/БУХАНКА_ДЖИП.jpg"},
			{model: "ВЕЗДЕХОДНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ВЕЗДЕХОДНАЯ_БУХАНКА.jpg"},
			{model: "БУХАНКА - МОНСТР ТРАК", img: "../images/mark/БУХАНКА/БУХАНКА_МОНСТР_ТРАК.jpg"},
			{model: "ЭЛИТНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ЭЛИТНАЯ_БУХАНКА.jpg"},
			{model: "БРОНИРОВАННАЯ БУХАНКА", img: "../images/mark/БУХАНКА/БРОНИРОВАННАЯ_БУХАНКА.jpg"},
			{model: "БУХАНКА ИЗ БУДУЩЕГО", img: "../images/mark/БУХАНКА/БУХАНКА_ИЗ_БУДУЩЕГО.jpg"},
			{model: "ГУСЕНИЧНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ГУСЕНИЧНАЯ_БУХАНКА.jpg"},
			{model: "ВОЗДУШНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ВОЗДУШНАЯ_БУХАНКА.jpg"},
			{model: "БУХАНКА - ЛИМУЗИН", img: "../images/mark/БУХАНКА/БУХАНКА_ЛИМУЗИН.jpg"},
		]
			
		
		return(
		<div className="grid-x grid-padding-x">
            
			<Router>
			<div className="cell medium-3 large-3 text-left">
				<ul>
					<li>
						<Link to="/mark/bmw">BMW</Link>
					</li>
					<li>
						<Link to="/mark/mercedes">Mercedes</Link>
					</li>
					<li>
						<Link to="/mark/ford">Ford</Link>
					</li>
					<li>
						<Link to="/mark/vaz">Ваз</Link>
					</li>
					<li>
						<Link to="/mark/toyota">Toyota</Link>
					</li>
					<li>
						<Link to="/mark/БУХАНКА">...</Link>
					</li>
				</ul>
				</div>
				
				<div className="cell medium-8 large-8">
				
				<Switch>
					<Route path='/mark/bmw'>
						<Table_car mark="BMWs" cars={car_list_bmw} />
					</Route>
					<Route path='/mark/ford'>
						<Table_car mark="Ford" cars={car_list_ford} />
					</Route>
					<Route path='/mark/mercedes'>
					<Table_car mark="Mercedes" cars={car_list_mercedes} />
					</Route>
					<Route path='/mark/toyota'>
					<Table_car mark="Toyota" cars={car_list_toyota} />
					</Route>
					<Route path='/mark/vaz'>
					<Table_car mark="Ваз" cars={car_list_vaz} />
					</Route>
					<Route path='/mark/БУХАНКА'>
					<Table_car mark="БУХАНКА" cars={car_list_BUHANKA} />
					</Route>
				</Switch>
				  </div>
				</Router>
			
			
			
			{/*<Table_car mark="BMWs" cars={car_list} />*/}
      
			
		</div>
		);
	}
}

export default Body;
