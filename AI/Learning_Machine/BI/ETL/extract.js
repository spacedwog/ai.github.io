// Extract Correct Data 
function extractData(obj) {
    return {
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon,
        kmL: obj.Miles_per_Gallon * 0.425
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null && obj.kmL != null;
}