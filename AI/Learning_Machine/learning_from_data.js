// Asyncronous Function to Train the Model
async function trainModel(model, inputs, labels, surface) {
    const batchSize = 25;
    const epochs = 50;
    const callbacks = tfvis.show.fitCallbacks(surface, ['loss'], {
        callbacks: ['onEpochEnd']
    })
    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: callbacks
    });
}