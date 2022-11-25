function affichageElements(tab, elementId, link){

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    
    fetch(link, requestOptions)
        .then(response => response.text())
        .then(result => {
                    for (let i = 0; i < result.length; i++){ 
                        var str = '<div class="elt">'
                        for (let j = 0; j < tab.length; j++){ 
                            str += tab[j] + " -> " + JSON.parse(result)[i][tab[j]] + "<br />";
                        }
                        str += "</div>"
                        document.getElementById(elementId).innerHTML += str
                    }
                }
            )
        .catch(error => console.log('error', error));
}

export default affichageElements;