const fetch = require("node-fetch");
function retrieveDBFull (){
    fetch("http://127.0.0.1:8086/api/users/", {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'default', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'omit',
        headers: {
          'Content-Type': 'application/json'
        },
        // body: JSON.stringify(data)
    })
    .then(response => {
        if (response.status !== 200) {
            error('GET API response failure: ' + response.status);
            return;
        }
        response.json().then(data => {
            console.log(data);
        })
    })



}

retrieveDBFull()