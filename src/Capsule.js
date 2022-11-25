import React from 'react';
import './App.css';

class Capsule extends React.Component {
    render() {
        var tab = ["capsule_serial","capsule_id", "details"];
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.spacexdata.com/v3/capsules", requestOptions)
            .then(response => response.text())
            .then(result => {
                        for (let i = 0; i < result.length; i++){ 
                            for (let j = 0; j < tab.length; j++){ 
                            document.getElementById("capsule").innerHTML += tab[j] + " -> " + JSON.parse(result)[i][tab[j]] + " "
                            }
                            document.getElementById("capsule").innerHTML +=  "<br />"
                        }
                    }
                )
            .catch(error => console.log('error', error));
        
        return (

        <div>
        <h1>Les capsules</h1>
            <div id='capsule'>
            </div>
        </div>
        )
        
    }
}
export default Capsule;