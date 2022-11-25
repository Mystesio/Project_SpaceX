import React from 'react';
import './App.css';
import affichageElements from './functions';
import capsule from './capsule.jpg';

class Capsule extends React.Component {
    render() {
        var tab = ["capsule_serial","capsule_id", "details"];
        affichageElements(tab, "capsule", "https://api.spacexdata.com/v3/capsules");
        return (
            <div>
                <div class="imgFond">
                    <img id="image" src={capsule} alt={"capsule"} />
                    <h1 id="centered">Les capsules</h1>
                </div>
                <div id='capsule'></div>
            </div>
        )
    }
}
export default Capsule;