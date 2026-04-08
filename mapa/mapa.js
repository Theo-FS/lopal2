function mapa(){
    const frutas = new Map;

    frutas.set ("maçã", 500)
    frutas.set ("laranja", 200)
    frutas.set ("banana", 300)
    frutas.set ("morango", 200)
    frutas.set ("pera", 400)

      let preco = frutas.get("pera");
       console.log(preco);

       console.log(frutas.size);

       console.log(frutas.has('banana'));
       frutas.forEach((valor, chave) => console.log(`${chave} = R$${valor},00`));
       
       for(const x of frutas.keys()){
        console.log(x);
       }
       
       for(const x of frutas.values()){
        console.log(x);
       }
      


      


}


mapa();