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
			{model: "Старый седан", img: "../images/mark/BMW/3.jpg", prise:"цена = "},
			{model: "X3", img: "../images/mark/BMW/2.jpg"},
			{model: "Внедорожник", img: "../images/mark/BMW/1.jpg", prise:"цена = "},
			{model: "Новая машина", img: "../images/mark/BMW/4.jpg", prise:"цена = "},
			
		]
		
		
		const car_list_ford = [
			{model: "Mustang", img: "../images/mark/ford/Mustang.jpg", prise:"цена = "},
			{model: "miniwen", img: "../images/mark/ford/miniwen.jpg", prise:"цена = "},
			{model: "mondeno", img: "../images/mark/ford/mondeno.jpg", prise:"цена = "},
			{model: "ranger", img: "../images/mark/ford/ranger.jpg", prise:"цена = "},
			
		]
		
		
		const car_list_vaz = [
			{model: "Грузовой Ваз", img: "../images/mark/ВАЗ/Грузовой_Ваз.jpg", prise:"цена = "},
			{model: "Классический Ваз", img: "../images/mark/ВАЗ/Классический_Ваз.jpg", prise:"цена = "},
			{model: "Постапокалептический Ваз", img: "../images/mark/ВАЗ/Постапокалептический_Ваз.jpg", prise:"цена = "},
			{model: "Сверх кастомный Ваз", img: "../images/mark/ВАЗ/Сверх_кастомный_Ваз.jpg", prise:"цена = "},
			
		]
		
		const car_list_toyota = [
			{model: "camry", img: "../images/mark/toyota/camry.jpg", prise:"цена = "},
			{model: "supra", img: "../images/mark/toyota/supra.jpg", prise:"цена = "},
			{model: "land cruiser", img: "../images/mark/toyota/land_cruiser.jpg", prise:"цена = "},
			{model: "prototipe", img: "../images/mark/toyota/prototipe.jpg", prise:"цена = "},
			
		]
		
		
		const car_list_mercedes = [
			{model: "electro car", img: "../images/mark/mercedes/electro_car.jpg", prise:"цена = "},
			{model: "light car", img: "../images/mark/mercedes/light_car.jpg", prise:"цена = "},
			{model: "supper car", img: "../images/mark/mercedes/supper_car.jpg", prise:"цена = "},
			{model: "Как это сюда попало?", img: "../images/mark/mercedes/kak_eto_suda_popalo.jpg", prise:"цена = "},
			
		]
		
		const car_list_BUHANKA = [
			{model: "КЛАССИЧЕСКАЯ БУХАНКА", img: "../images/mark/БУХАНКА/КЛАССИЧЕСКАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "ГРУЗОВАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ГРУЗОВАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "СКОРАЯ БУХАНКА", img: "../images/mark/БУХАНКА/СКОРАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "БУХАНКА ДЖИП", img: "../images/mark/БУХАНКА/БУХАНКА_ДЖИП.jpg", prise:"цена = "},
			{model: "ВЕЗДЕХОДНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ВЕЗДЕХОДНАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "БУХАНКА - МОНСТР ТРАК", img: "../images/mark/БУХАНКА/БУХАНКА_МОНСТР_ТРАК.jpg", prise:"цена = "},
			{model: "ЭЛИТНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ЭЛИТНАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "БРОНИРОВАННАЯ БУХАНКА", img: "../images/mark/БУХАНКА/БРОНИРОВАННАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "БУХАНКА ИЗ БУДУЩЕГО", img: "../images/mark/БУХАНКА/БУХАНКА_ИЗ_БУДУЩЕГО.jpg", prise:"цена = "},
			{model: "ГУСЕНИЧНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ГУСЕНИЧНАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "ВОЗДУШНАЯ БУХАНКА", img: "../images/mark/БУХАНКА/ВОЗДУШНАЯ_БУХАНКА.jpg", prise:"цена = "},
			{model: "БУХАНКА - ЛИМУЗИН", img: "../images/mark/БУХАНКА/БУХАНКА_ЛИМУЗИН.jpg", prise:"цена = "},
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
