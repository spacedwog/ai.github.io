async function usuario() {
    let ipAddress;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            alert("New User Id: " + ipAddress);
            console.log(data.ip);
        })
        .catch(error => {
            console.log('Error:', error);
        });
    const newUser = {
        id: ipAddress
    }
}