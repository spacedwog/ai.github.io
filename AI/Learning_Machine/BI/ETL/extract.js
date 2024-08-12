// Extract Correct Data 
function extractData(obj) {
    alert(obj.Name);
    return {
        Name: obj.Name,
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon
    };
    localStorage.setItem("cilindros", obj.Cylinders);
    localStorage.setItem("deslocamento", obj.Cylinders);
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}