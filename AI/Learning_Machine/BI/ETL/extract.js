// Extract Correct Data 
function extractData(obj) {

    const kg = converterPesoLibra_PesoQuilo(obj.Weight_in_lbs);

    return {
        Name: obj.Name,
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon,
        Descricao: "O " + obj.Name + " é um carro fabricado no(a) " + obj.Origin + " em " + obj.Year +
            " e pesa " + kg
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}