const numero = [1,2,200,10,7,12,15,8]

const numeroFiltrado = numero.filter((n) => {return n < 10;} )

console.log(numeroFiltrado);

const comentarios = [
    {comentario: "bla bla bla", exibe:true},
    {comentario: "Esse evento foi uma merda", exibe:false},
    {comentario: "Ótimo Evento !",exibe:true}
];

const comentariosOk = comentarios.filter((c) =>{return c.exibe === true;});

console.log(comentariosOk);