// Plot Data
function tfPlot(values, surface) {
    tfvis.render.scatterplot(surface, {
        values: values,
        series: ['Original', 'Predicted']
    }, {
        xLabel: 'Horsepower',
        yLabel: 'MPG',
    });
}

function plot_data(values) {
    // Plot the Data
    const surface = document.getElementById("plot1");
    tfPlot(values, surface);
}