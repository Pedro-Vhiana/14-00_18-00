//Operadores Lógicos
// E - & - se uma coisa e outra são verdadeiras
//V - verdadeiro
//F - falso

//V V - V
//F V - F
//V F - F
//F F - F

//média precisa ser maior ou igual 7 E preciso ter, no mínimo, 80% de presença.

const media = (5+2+4) / 3
const presenca = 0.9

console.log(media => 7 && presenca >= 0.8   )

//Operador OU- || - uma coisa ou outra seja verdadeira

//V V - V
//V F - V
//F V - V
//F F - F

console.log(4 > 7 || 3 < 2)
console.log(5 > 3.5 || 7 > 8)

const estado = 'CE'

console.log(estado == 'SP' || estado == "MG")


//Operador Não

//NOT V - F
//NOT F - V

const resultado = 5 < 3 

console.log(!resultado)

