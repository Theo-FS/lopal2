const pessoa = {
    nome: "Henrique" ,
    sobrenome: "Silva",
    time: "São Paulo" ,
    idade: "18 anos",
    nomeCompleto: function (){return this.nome + " " + this.sobrenome},
    meuObjeto: function() {return this}
};

console.log(pessoa.nome + " " + pessoa.sobrenome + " tem " +
    pessoa.idade + " e torce para o " + pessoa.time
)

const pessoaStringficada = JSON.stringify(pessoa);
console.log(pessoaStringficada);
const pessoaParseada = JSON.parse(pessoaStringficada);

console.log(pessoaParseada.nome + " " + pessoaParseada.sobrenome + " tem " +
    pessoaParseada.idade + " anos e torce para o " + pessoaParseada.time
    
)
