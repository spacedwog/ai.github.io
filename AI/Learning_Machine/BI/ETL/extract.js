// Extract Correct Data 
function extractData(obj) {
    return {
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}