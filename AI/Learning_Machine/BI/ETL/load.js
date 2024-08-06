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
    const surface1 = document.getElementById("plot1");
    const surface2 = document.getElementById("plot2");
    tfPlot(values, surface1);
}