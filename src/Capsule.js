import React from 'react';
import './App.css';
import affichageElements from './functions';

class Capsule extends React.Component {
    render() {
        var tab = ["capsule_serial","capsule_id", "details"];
        affichageElements(tab, "capsule", "https://api.spacexdata.com/v3/capsules");
        return (
            <div>
                <h1>Les capsules</h1>
                <div id='capsule'></div>
            </div>
        )
    }
}
export default Capsule;