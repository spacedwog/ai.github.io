const ipAddress;
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        ipAddress = data.ip;
        nome = data.name;
        alert(ipAddress + "\n" + nome);
        console.log(data.ip);
    })
    .catch(error => {
        console.log('Error:', error);
    });
const newUser = {
    id: ipAddress
}

//Encapsulamento
//GET
function getIpAddress() {
    localStorage.getItem("ipAddress");
}
//SET
function setIpAddress(ipAddress) {
    localStorage.setItem("ipAddress", ipAddress);
}