// Extract Correct Data 
function extractData(obj) {
    const kmL = converterMpg_kmL(obj.Miles_per_Gallon);
    return {
        Name: obj.Name,
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}