function mapa(){
    const frutas = new Map();

    frutas.set("maçã, 500");
    frutas.set("banana, 200");
    frutas.set("laranja, 300");

    let preco = frutas.get("banana");

    console.log(preco);

    


}