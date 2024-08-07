// Main Function
async function runTF() {
    const jsonData = await fetch("../../../../cardata.json");
    let values = await jsonData.json();
    values = values.map(extractData).filter(removeErrors);

    // Plot the Data
    const surface1 = document.getElementById("plot1");
    const surface2 = document.getElementById("plot2");
    tfPlot(values, surface1);

    // Convert Input to Tensors
    const inputs = values.map(obj => obj.x);
    const labels = values.map(obj => obj.y);

    alert(inputs);

    const inputTensor = tf.tensor2d(inputs, [inputs.length, 1]);
    const labelTensor = tf.tensor2d(labels, [labels.length, 1]);
    const inputMin = inputTensor.min();
    const inputMax = inputTensor.max();
    const labelMin = labelTensor.min();
    const labelMax = labelTensor.max();
    const nmInputs = inputTensor.sub(inputMin).div(inputMax.sub(inputMin));
    const nmLabels = labelTensor.sub(labelMin).div(labelMax.sub(labelMin));

    // Create a Tensorflow Model
    const model = tf.sequential();
    model.add(tf.layers.dense({
        inputShape: [1],
        units: 1,
        useBias: true
    }));
    model.add(tf.layers.dense({
        units: 1,
        useBias: true
    }));
    model.compile({
        loss: 'meanSquaredError',
        optimizer: 'sgd'
    });

    // Start Training
    await trainModel(model, nmInputs, nmLabels, surface2);

    // Un-Normalize Data
    let unX = tf.linspace(0, 1, 100);
    let unY = model.predict(unX.reshape([100, 1]));

    const unNormunX = unX
        .mul(inputMax.sub(inputMin))
        .add(inputMin);
    const unNormunY = unY
        .mul(labelMax.sub(labelMin))
        .add(labelMin);
    unX = unNormunX.dataSync();
    unY = unNormunY.dataSync();

    // Test the Model
    const predicted = Array.from(unX).map((val, i) => {
        return {
            x: val,
            y: unY[i]
        }
    });
    tfPlot([values, predicted], surface1)

    // End Main Function
}