function affichageElements(tab, elementId, link){

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => {
                    for (let i = 0; i < result.length; i++){ 
                        for (let j = 0; j < tab.length; j++){ 
                            document.getElementById(elementId).innerHTML += '<div class="elt">' + tab[j] + " -> " + JSON.parse(result)[i][tab[j]] + "</div>"
                        }
                        //document.getElementById(elementId).innerHTML +=  "<br />"
                    }
                }
            )
        .catch(error => console.log('error', error));
}

export default affichageElements;