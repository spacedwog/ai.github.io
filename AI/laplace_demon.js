function laplace_demon(xArray, yArray) {

    // Calculate Sums
    let xSum = 0,
        ySum = 0,
        xxSum = 0,
        xySum = 0;
    let count = xArray.length;
    for (let i = 0, len = count; i < count; i++) {
        xSum += xArray[i];
        ySum += yArray[i];
        xxSum += xArray[i] * xArray[i];
        xySum += xArray[i] * yArray[i];
    }

    // Calculate slope and intercept
    let slope = (count * xySum - xSum * ySum) / (count * xxSum - xSum * xSum);
    let intercept = (ySum / count) - (slope * xSum) / count;

    let yIntercept = (intercept * 100) / count;

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 50; x <= 240; x += 1) {
        xValues.push(x);
        yValues.push(x * slope + intercept);
    }

    const data = [
        { x: xArray, y: yArray, mode: "markers" },
        { x: xValues, y: yValues, mode: "line" }
    ];

    const layout = {
        xaxis: { range: [0, 240], title: "Horsepower" },
        yaxis: { range: [0, 50], title: "MPG" },
        title: "Laplace Demon(AI)"
    };
    Plotly.newPlot("plot4", data, layout);
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    laplace_demon(position.coords.latitude, position.coords.longitude);
}