/**
 * Funçoes são blocos de construçao fundamentais em javascript.Uma função e um procedimento de Javascript
 * -um conjunto de instruções que executa uma tarefa ou calcula um valor. para usar uma função,você deve
 * defini-la em algum lugar no escopo do qual você quiser chamá-la.
 */

// function cumprimentar(mensagem, repetir){
    // for(let i=1; i<= repetir; i++)
    // alert(mensagem)
// }

//cumprimentar('Olá mísera',3)

// function soma(num,num2){
    // let result = num + num2
    // return result
// }

//let resultado = soma(10,10)
//console.log(`seu número é: ${resultado}.`)
//console.log(resultado)



//criem uma função  que gera o resultado  de uma  equação do segundo grau
//delta = b2 - 4.a.c
//b= -b +- raiz de delta / 2a


function equacaoSegundoGrau(a,b,c){
    const delta = Math.pow(b,2) -4 * a * c
    const x1 = (-b - Math.sqrt(delta))/2*a
    const x2 = (-b + Math.sqrt(delta))/2*a
    return[x1, x2]
    }

console.log(equacaoSegundoGrau(1,-1,-12))