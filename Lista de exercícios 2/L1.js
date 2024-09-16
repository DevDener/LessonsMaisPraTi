let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2020,
    cor: "Prata"
};

for (let propriedade in carro) {
    console.log(`${propriedade}: ${carro[propriedade]}`);
};