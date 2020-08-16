import React from "react";

class Header extends React.Component {
  constructor(props) {
	  super(props);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu" data-dropdown-menu>
            <li className="menu-text">Все Машины</li>
            <li>
              <a href="#">Главная</a>
            </li>
			<li>
              <a href="#">Марки</a>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li>
              <input type="search" placeholder="Введите..." />
            </li>
            <li>
              <button type="button" className="button">
                Поиск
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Header;
