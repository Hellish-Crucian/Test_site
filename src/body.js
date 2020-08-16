import React from 'react';

class Body extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
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
            <div className="grid-container">
                 <div className="grid-x grid-margin-x small-up-2 medium-up-3">
                    <div className="cell">
                <div className="card">
                     <div className="card-section">
                       <p>Старый элитный Bmw седан.</p>
                      </div>
                      <img src="../images/mark/BMW/cattouch.jpg"/>
                </div>
                </div>
                <div className="cell">
                <div className="card">
                     <div className="card-section">
                       <p>Bmw x3</p>
                      </div>
                      <img src="../images/mark/BMW/1200px-2018_BMW_X3_xDrive30d_M_Sport_Automatic_3.0_Front.jpg"/>
                </div>
                </div>
                <div className="cell">
                <div className="card">
                     <div className="card-section">
                       <p>новый седан</p>
                      </div>
                      <img src="../images/mark/BMW/bmw2grancoupe.jpg"/>
                </div>
                </div>
                <div className="cell">
                <div className="card">
                     <div className="card-section">
                       <p>супер Новый седан</p>
                      </div>
                      <img src="../images/mark/BMW/p90385005-highres.jpg"/>
                </div>
                </div>
                </div>
                </div>
            </div>
        </div>
		);
	}
}

export default Body;
