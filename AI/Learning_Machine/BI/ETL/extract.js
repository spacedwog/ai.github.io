// Extract Correct Data 
function extractData(obj) {

    const kg = converterPesoLibra_PesoQuilo(obj.Weight_in_lbs);
    const deslocamento_total = deslocamento_total(obj.Cylinders, obj.Displacement);
    const velocidade = calculo_velocidade(obj.Horsepower, obj.Acceleration, kg);

    return {
        Name: obj.Name,
        x: obj.Horsepower,
        y: obj.Miles_per_Gallon,
        Descricao: "O " + obj.Name + " é um carro fabricado no(a) " + obj.Origin + " em " + obj.Year +
            " e percorre " + velocidade
    };
}

function removeErrors(obj) {
    return obj.x != null && obj.y != null;
}