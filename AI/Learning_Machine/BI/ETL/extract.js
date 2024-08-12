// Extract Correct Data 
function extractData(obj) {
    return {
        Name: obj.Name,
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon,
        cilindros: obj.Cylinders,
        deslocamento: obj.Displacement,
        peso_libras: obj.Weight_in_lbs,
        aceleracao: obj.Acceleration,
        ano_fabricacao: obj.Year,
        origem_fabrica: obj.Origin
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}