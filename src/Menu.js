import React from 'react';
import './App.css';

class Menu extends React.Component {
render () {
    return(
        <div className="menu">
            <h2>Menu</h2>
            <ul>
                <li>
                    <a href="#capsule">Capsules</a>
                </li>
                <li>
                    <a href="#launch">Launches</a>
                </li>
            </ul>
        </div>
    )
    }
}
export default Menu;