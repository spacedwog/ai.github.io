const { json } = require("stream/consumers");

async function usuario() {
    let ipAddress;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            alert(ipAddress);
            console.log(data.ip);
        })
        .catch(error => {
            console.log('Error:', error);
        });
    const newUser = {
        id: ipAddress
    }
    setIpAddress(ipAddress);
    send_usuarioData(ipAddress);
}

async function send_usuarioData(ipAddress) {
    const fs = require('fs');

    // Read the contents of the JSON file
    const data = fs.readFileSync('../usuario.json');
    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data);

    console.log("Before Adding data", JSON.stringify(jsonData, null, 4));

    // Modify the JavaScript object by adding new data
    jsonData.users.push({
        name: getIpAddress()
    });


    // Convert the JavaScript object back into a JSON string
    const jsonString = JSON.stringify(jsonData);

    fs.writeFileSync('../usuario.json', jsonString, 'utf-8', (err) => {
        if (err) throw err;
        console.log('Data added to file');
    });

    const update_data = fs.readFileSync('../usuario.json');
    const updated_jsonData = JSON.parse(update_data);
}

//Encapsulamento
//GET
function getIpAddress() {
    return localStorage.getItem("ipAddress");
}
//SET
function setIpAddress(ipAddress) {
    localStorage.setItem("ipAddress", ipAddress);
}