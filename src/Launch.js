import React from 'react';
import './App.css';


class Launch extends React.Component {
    render() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.spacexdata.com/v3/launches", requestOptions)
            .then(response => response.text())
            .then(result => {
                        for (let i = 0; i < result.length; i++){ 
                            document.getElementById("launch").innerHTML += JSON.parse(result)[i]["mission_name"] + " " + JSON.parse(result)[i]["launch_year"] + "<br />"
                        }
                    }
                )
            .catch(error => console.log('error', error));
        
        return (
        <div>
        <h1>Les lancement</h1>
        <div id='launch'>

        </div>

        
        </div>
        )
        
    }
}
export default Launch;