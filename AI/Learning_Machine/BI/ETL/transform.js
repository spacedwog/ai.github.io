function transformData(xArray, yArray) {

    const data = [
        { x: xArray, y: yArray, mode: "markers" },
        { x: [40, 240], y: [9, 50], mode: "line" },
    ];

    const layout = {
        xaxis: { range: [0, 240], title: "Horsepower" },
        yaxis: { range: [0, 50], title: "MPG" },
        title: "House Prices vs. Size"
    };

    Plotly.newPlot("plot2", data, layout);
}