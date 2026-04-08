function classe(){
    class Carro {
        constructor(nome, ano) {
            this.nome = nome;
            this.ano = ano;


        }
        idade(){
            const data = new Date();
            return data.getFullYear() - this.ano;
        }
    }
    
    let meucarro = new Carro("kwid", 2009);

    let frase = "o meu " + meucarro.nome + " " + meucarro.ano + " tem " + meucarro.idade() + " anos."

    console.log(frase);
    meucarro.ano = 2024
    meucarro.nome = "renegade"
    console.log(meucarro.nome + " " + meucarro.ano);
    let outrafrase = "fui ao senai."


    

    
}

classe();