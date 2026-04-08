function conjunto(){
    const letras =new Set();
    letras.add("a");
    letras.add("c");
    letras.add("b");

    console.log(letras[1]);

    console.log(letras.values);
    console.log(letras.has("a"))

}
conjunto();