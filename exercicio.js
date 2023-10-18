
const filme2 = {
    titulo : "Batman Arkhan",
    estudio: "Warner",
    genero: ["Ação","Super Herói"],
    lançado: true,
    preco: 15.99
}

const filme = {
    titulo : "Batman Begins",
    estudio: "Warner",
    lançado: true,
    preco: 15.99
}

const {titulo,preco,lançado} = filme;

console.log(`Filme Comprado : Título:${titulo},Preço:${preco},Publicação:${lançado ? "Lançado":'Não Lançado'}`);




