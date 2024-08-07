const eixoX;
const eixoY;
const positionX;
const positionY;

function find_array(eixoX, eixoY, predictedX, predictedY) {
    let first = eixoX.find(find_array);
    let second = eixoY.find(find_array);

    if ((eixoX.indexOf(eixoX) + 1) == (eixoY.indexOf(eixoY) + 1)) {
        alert("teste");
    }

}

function find_Xarray(value, index, array) {
    let position = value
    setEixoX(value);
}

function find_Yarray(value, index, array) {
    setEixoY(value);
}


//Encapsulamento
function setEixoX(value) {
    eixoX = value;
}

function setEixoY(value) {
    eixoY = value;
}

function setPositionX(position) {}

function setPositionY(position) {

}