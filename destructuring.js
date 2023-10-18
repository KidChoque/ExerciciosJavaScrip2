const camisaLacoste = {
    descricao: "Camisa Lacoste",
    preco: 589.00,
    tamanho: "m",
    cor:"Amarela",
    presente: true
}

const {descricao,preco} = camisaLacoste;
const {presente} = camisaLacoste;


// ? Operador ternário, condição (Se presente true ou false = sim ou não)
console.log(`
    PRODUTO:
            Descrição: ${descricao};
            Preço: ${preco};
            Presente: ${presente ? "sim":"não" };

`);