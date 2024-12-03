async function usuario() {
    let ipAddress;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            setIpAddress(ipAddress);
            let ip = getIpAddress();
            alert("Novo Usuário(a): " + ip);
            ipAddress += "<p id='" + ipAddress + "'>" + "</p>";
            console.log(ip);
        })
        .catch(error => {
            console.log('Error:', error);
        });
}

function getIpAddress() {
    localStorage.getItem("ipAddress");
}

function setIpAddress(ip) {
    localStorage.setItem("ipAddress", ip);
}