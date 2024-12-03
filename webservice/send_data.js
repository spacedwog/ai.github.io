async function usuario() {
    let ipAddress;
    const ipaddresshtml = document.getElementById('ipaddress').innerHTML;
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            setIpAddress(ipAddress);
            alert("Novo Usuário(a): " + getIpAddress());
            ipAddress += "<p id='" + ipAddress + "'>" + "</p>";
            console.log(data.ip);
            const xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function() {
                const myObj = JSON.parse(ipAddress);
                document.getElementById("demo").innerHTML = myObj.name;
            };
            xmlhttp.open("GET", "../usuario.json");
            xmlhttp.send();
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