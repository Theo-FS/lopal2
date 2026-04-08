function arranjo(){
    let turma = ["Alessandra", "Alexandre", "Allan", "Ana"];
    console.log(turma);
    console.log(turma[0]);
    console.log(turma[2]);
    console.log(turma[3]);

    const frutas =[];

    frutas[0] = "banana"
    frutas[1] = "laranja"
    frutas[2] = "maçã"

    console.log(frutas);

    for(i = 0; i < frutas.length; i++){
        console.log(i + " " + frutas[i]);
    }

    for( i = 0; i < turma.length; i++){
        console.log(i + " " + turma[i]);
    }

    turma.forEach


}
arranjo();