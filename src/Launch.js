import React from 'react';
import './App.css';
import affichageElements from './functions';

class Launch extends React.Component {
    render() {
        var tab = ["mission_name","launch_year", "launch_success"];
        affichageElements(tab, "launch", "https://api.spacexdata.com/v3/launches");
        return (
            <div>
                <h1>Les lancement</h1>
                <div id='launch'></div>
            </div>
        )
    }
}
export default Launch;