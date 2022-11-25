import React from 'react';
import './App.css';


class Launch extends React.Component {
    render() {
        var tab = ["mission_name","launch_year", "launch_success"];
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.spacexdata.com/v3/launches", requestOptions)
            .then(response => response.text())
            .then(result => {
                        for (let i = 0; i < result.length; i++){ 
                            for (let j = 0; j < tab.length; j++){ 
                            document.getElementById("launch").innerHTML += tab[j] + " -> " + JSON.parse(result)[i][tab[j]] + " "
                            }
                            document.getElementById("launch").innerHTML +=  "<br />"
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