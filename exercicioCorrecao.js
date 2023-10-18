const filmes = [
    {
    titulo : "Batman Arkhan",
    estudio: "Warner",
    genero: ["Ação","Super Herói"],
    lançado: true,
    preco: 15.99
    },
    {
    titulo : "Batman Begins",
    estudio: "Warner",
    genero: ["Ação","Sequência"],
    lançado: true,
    preco: 15.99
    }
]

filmes.forEach(({titulo,genero},i) => {
    console.log(`
    Filme${i+1}: ${titulo.toUpperCase()}
    Genêro: ${genero.toString()}
    `);
});