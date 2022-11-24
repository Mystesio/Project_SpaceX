import React from 'react';

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
                            document.write(JSON.parse(result)[i]["mission_name"] + " " + JSON.parse(result)[i]["launch_year"] + "<br />")
                        }
                    }
                )
            .catch(error => console.log('error', error));
        
        return <h1>Les lancement</h1>
        
    }
}
export default Launch;