alert("oi")
//mostrar uma mensagem, para o usuario.

const nomeUsuario = prompt('digite seu nome:')
 
let num = Number(prompt('Olá ' + nomeUsuario + ' digite um numero'))
//console.log(typeof num)


let sucessor = (++num)

console.log(sucessor)

let antecessor = (--num)

console.log(--antecessor)


alert('seu numero ' + num + ' seu antecessor ' + antecessor + ' seu sucessor ' + sucessor )