import React from 'react';
import './App.css';
import affichageElements from './functions';
import launch from './launch.jpg';

class Launch extends React.Component {
    render() {
        var tab = ["mission_name","launch_year", "launch_success"];
        affichageElements(tab, "launch", "https://api.spacexdata.com/v3/launches");
        return (
            <div>
                <div class="imgFond">
                    <img id="image" src={launch} alt={"launch"} />
                    <h1 id="centered">Les lancements</h1>
                </div>
                <div id='launch'></div>
            </div>
        )
    }
}
export default Launch;