async function usuario() {
    let ipAddress;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            setIpAddress(ipAddress);
            alert("New Usuário: " + getIpAddress());
            console.log(data.ip);
        })
        .catch(error => {
            console.log('Error:', error);
        });
    const newUser = {
        id: ipAddress
    }
}

function getIpAddress() {
    return localStorage.getItem("ipAddress");
}

function setIpAddress(ip) {
    localStorage.setItem("ipAddress", ip);
}