let livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "ficção",
};

let temEditora = false;

for (let propriedade in livro){
    if (propriedade == "editora") {
        temEditora = true
        break
    };
};

if (!temEditora) {
    livro.editora = "Sem Editora"
};

console.log(livro);