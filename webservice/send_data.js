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
                //const myObj = JSON.parse(data.ip);
                document.getElementById("ul_usuarios").innerHTML = "</br><li class='w3-padding-16'>" +   
                                                                        "<img src='https://www.w3schools.com/w3images/avatar6.png' class='w3-left w3-circle w3-margin-right' style='width:35px'>" +
                                                                        "<span class='w3-xlarge'>" + getIpAddress() + "</span><br></br>"
                                                                    "</li>";
            };
            xmlhttp.open("POST", "usuario.json");
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