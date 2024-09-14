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
    const response = await fetch('./usuario.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(usuario)
    })
    alert("status: " + response.status);
    console.log('status:', response.status)

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