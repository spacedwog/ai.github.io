async function usuario() {
    let ipAddress;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            setIpAddress(ipAddress);
            alert("Novo Usuário(a): " + getIpAddress());
            ipAddress += "<p id='" + ipAddress + "'>" + "</p>";
            console.log(data.ip);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function getIpAddress() {
    return localStorage.getItem("ipAddress");
}

function setIpAddress(ip) {
    localStorage.setItem("ipAddress", ip);
}