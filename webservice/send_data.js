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
    setIpAddress(ipAddress);
    const newUser = {
        id: ipAddress
    }
}

async function send_usuarioData(ipAddress) {
    const response = await fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(usuario)
    })

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