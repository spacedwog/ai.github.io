function config() {
    const http = require("node:http");
    var myWindow = window.open("Configurações", "", "width=200,height=100");

    const api = {
        "host": "api.ipify.org",
        "port": 80,
        "path": "/"
    };

    http.get(api, response => {
        response.on("data", ip => {
            console.log('\nYour public IP address is: \x1b[33${ip}\x1b[0m\n');
        });
    });
}