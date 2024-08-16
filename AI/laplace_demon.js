function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    if (latitude == getLatitude() && longitude == getLongitude()) {
        alert("Você está parado");
    } else if (latitude > getLatitude() && longitude > getLongitude()) {
        alert("Você andou para frente");
    } else if (latitude < getLatitude() && longitude > getLongitude()) {
        alert("Você andou para trás2");
    }
    setLatitude(latitude);
    setLongitude(longitude);
}

//Encapsulamento
function setLatitude(latitude) {
    localStorage.setItem("latitude", latitude);
}

function setLongitude(longitude) {
    localStorage.setItem("longitude", longitude);
}

function getLatitude() {
    const latitude = localStorage.getItem("latitude");

    return latitude;
}

function getLongitude() {
    const longitude = localStorage.getItem("longitude");

    return longitude;
}