//usamos no nosso código para comparar um valor com outro.
//só existem duas respostas, true/false.
//Comparador de igualdade.
//usamos == para comparar as variantes.
//saber se * é igual a *(===)
//saber se * é diferente de * (!=) - compara apenas o conteúdo
//saber se o valor é diferente no tipo e no conteúdo (! ==)
//saber se * é maior que * (* > *)

let msg = 'Eu sou uma mensagem'
let msg2 = 'Eu sou outra mensagem'


console.log(msg == msg2)

let a = 78
let b = '78'
let c = 500
let d = 550

console.log(a == b)

//idênticos
console.log(a === b)

let e = 5 //number
e = 'Olá mundo' //string

//diferença
console.log(msg != msg2)
console.log(a != b)
console.log(a !== b)

a = 56
b = 98

console.log(a > b)
console.log(a >= b)
console.log(a < b)
console.log(a <= b)





