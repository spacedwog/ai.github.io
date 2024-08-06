// Transform Data 
function transformData(obj) {
    return {
        x: 0 + ((0 + obj.Acceleration * 5) / 2),
        y: obj.Miles_per_Gallon * 0.425
    };
}