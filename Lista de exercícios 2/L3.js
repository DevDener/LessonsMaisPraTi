let produto = {
    nome: "PC Gamer",
    preco: 5500,
    estoque: 30,
    garantia: 1,
    avaliacaoMedia: 4.8,
    peso: 2.5
};

function filtrarPropriedades(obj, valor) {
    let resultado = {};

    for (let propriedade in obj) {
        if (typeof obj[propriedade] === "number" && obj[propriedade] > valor) {
            resultado[propriedade] = obj[propriedade];
        }
    }

    return resultado;
}

let propriedadesFiltradas = filtrarPropriedades(produto, 10);

console.log(propriedadesFiltradas);