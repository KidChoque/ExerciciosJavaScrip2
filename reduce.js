const numeros =  [10,12,20]

const resultado = numeros.reduce((total,n)=>{
    return total + n },0);

console.log(resultado);

let produtos = [{
    descricao : 'Camisa Polo',
    cor: 'Verde',
    preco: 10,
    perfil: 'M',
    quantidade: 10
    },
    {
    descricao : 'Camisa Polo',
    cor: 'Amarela',
    preco: 20,
    perfil: 'F',
    quantidade: 10
    },
    {
    descricao : 'Camisa Polo',
    cor: 'Azul',
    preco: 12,
    perfil: 'M',
    quantidade: 10
    }]
    //retorna apenas polos feminina
    let totalProdutos = produtos.reduce(function (total, produto) {
    // console.log(`${total} : ${produto.preco}`);
    return total + produto.preco
    }, 0);
    console.log(totalProdutos);