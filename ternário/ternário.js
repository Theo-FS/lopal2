function operadorternário(){
    var dia; 
    var data = new Date().getDay();

  dia = data == 0? "domingo":
        data == 1? "segunda feira":
        data == 2? "terça feira":
        data == 3? "quarta-feira":
        data == 4? "quinta feira":
        data == 5? "sexta feira":
        "sábado"; 

        document.getElementById("demo").innerHTML = "hoje é "  + dia;



       


}