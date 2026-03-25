 async function lagarta(){
    let lagarta = "()()()(00)"
    let lagarta2 = "( )( )( )(00)"
    let corpo_lagarta = "   ";
    function sleep(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    for(let i = 0; i < 20; i++){
        lagarta2 = corpo_lagarta + lagarta2;
        lagarta = corpo_lagarta + lagarta;
        await sleep (240);
        console.clear();
        console.log(lagarta)
        console.log(lagarta2)
        await sleep(240)
       
        
      
        
    }
} 