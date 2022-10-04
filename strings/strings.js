//métodos das strings.

const texto = 'Meu Deus eu estou morrendo de sono puta que pariu'

console.log(texto)

console.log(texto.toUpperCase())

console.log(texto.toLowerCase())

console.log(texto.concat('obrigado meu deus, melhor do mundo é o mão de javascript, codificando tudo e todos, sur'))

// console.log(texto[5])
console.log(texto.substring(2))
//substring pega um pedaço do texto completo



//case sensitive
console.log(texto.replace('Javascript','Rust'))//replace substitui a primeira ocorrência da pesquisa.
console.log(texto.placeAll('javascript', 'Kotlin'))//replaceAll-substitui todas as palavras


const html = '<DOCTYPE html>|n<html></html>'
console.log(html.startsWith('<DOCTYPE html>'))

console.log(html.endsWitch('/body'))

const mensagem = '                                     Olá Mundo'
console.log(mensagem.trim())

