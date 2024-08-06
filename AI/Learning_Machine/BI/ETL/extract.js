// Extract Correct Data 
function extractData(obj) {
    return {
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon,
        Acceleration: obj.Acceleration
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}