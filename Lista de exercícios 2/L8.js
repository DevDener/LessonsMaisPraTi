let filmes = [
    { titulo: "A Vida é Bela", diretor: "Roberto Benigni", anoLancamento: 1997 },
    { titulo: "O Poderoso Chefão", diretor: "Francis Ford Coppola", anoLancamento: 1972 },
    { titulo: "Forrest Gump", diretor: "Robert Zemeckis", anoLancamento: 1994 },
    { titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: 2010 }
];

let titulosFilmes = [];

filmes.forEach(filme => {
    titulosFilmes.push(filme.titulo);
});

console.log(titulosFilmes);
