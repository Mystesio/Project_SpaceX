import React from 'react';

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
                            document.write(JSON.parse(result)[i]["capsule_serial"] + "<br />")
                        }
                    }
                )
            .catch(error => console.log('error', error));
        
        return <h1>Les capsules</h1>
        
    }
}
export default Capsule;