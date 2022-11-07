function sorteio(){
    return parseInt(Math.random()*3+1)
}
let array = [0,0,0]

let portas = 0

let iteracao = 0

while(portas < 3 && iteracao <= 40){
    let arrayAux = [...array]
    iteracao ++
    for(let i=0;i<array.length;i++){
        array[i] = sorteio()
    }
    if(array[0] == array[1] && array[1] == array[2]){
        portas ++
        console.log(`a porta ${portas} foi aberta na iteracao ${iteracao}`)
    } else if(iteracao > 1 && array[0]== arrayAux[0] && array[1] == arrayAux[1] && array[2]==arrayAux[2]){
        portas ++
        console.log(`a porta ${portas} foi aberta na iteracao ${iteracao}`)
    }else{
        console.log(`Tente novamente!`)
    }
}

if(portas == 3){
    console.log(`Parabéns! Você conseguiu abrir as 3 portas em ${iteracao} iterações`)
} else{
    console.log(`Poxa, não foi dessa vez. Aperte F5 para tentar novamente.`)
}