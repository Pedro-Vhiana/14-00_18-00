alert("FRETE GRATIS PARA TODO PAIS, 50% DE DESCONTO NA LOJA.")
//mostrar uma mensagem, para o usuario.

const nomeUsuario = prompt('digite seu nome:')
 
let num = Number(prompt('Olá ' + nomeUsuario + ' digite um numero'))
//console.log(typeof num)

console.log(num)

const sucessor = (num++)

console.log(sucessor)

const antecessor = (--num)

console.log(antecessor)


alert('seu numero ' + num + ' seu antecessor ' + antecessor + ' seu sucessor ' + sucessor )