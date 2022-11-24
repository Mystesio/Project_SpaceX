import React from 'react';
import './App.css';

class Capsule extends React.Component {
    render() {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("https://api.spacexdata.com/v3/capsules", requestOptions)
            .then(response => response.text())
            .then(result => {
                        for (let i = 0; i < result.length; i++){ 
                            document.getElementById("capsule").innerHTML +=JSON.parse(result)[i]["capsule_id"] + " " + JSON.parse(result)[i]["details"] + "<br />"
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