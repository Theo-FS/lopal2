function calculadora(){
let resultado = 0.0;
let operando1;
let operando2;
let operador;

operando1 = parseFloat( prompt("digite o prmeiro número: ") );
operando2 = parseFloat( prompt("digite o segundo número: ") );
operador = prompt("digite uma das operações (+ - * /): ");

if ( operador === "+" ){
    resultado = operando1 + operando2;
} else if ( operador === "-"){
    resultado = operando1 - operando2;
} else if ( operador === "*"){
    resultado = operando1 * operando2;
}else if ( operador ==="/"){
    resultado = operando1 / operando2
}else {
    alert ("operador inválido");     
    return

}

alert("resultado:" +
    operando1 + " " + operador + " " + operando2 + " = " + resultado);
}