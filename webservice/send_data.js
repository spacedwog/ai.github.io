async function usuario() {
    const ipAddress;
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
    setIpAddress(ipAddress);
    const newUser = {
        id: ipAddress
    }
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