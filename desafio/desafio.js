//Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado. Código Condição de pagamento

//À vista em dinheiro ou cheque, recebe 10% de desconto
//À vista no cartão de crédito, recebe 15% de desconto
//Em duas vezes, preço normal de etiqueta sem juros
//Em três vezes, preço normal de etiqueta mais juros de 10% 


// Métodos de pagamento
// Em dinheiro
// Em cheque
// No cartão

//parseFloat = transforma o valor em number decimal.

//``= craze = espaço automatico no texto.(fazer tabela dinamica)

//== não compara conteudo
//=== compara conteudo
//paseInt transforma texto em numero inteiro

//use else if para impedir que a condição continue.

const precoProduto =  parseFloat(prompt('Qual o valor do produto? '))

const mensagem = `|INFORME O MEIO DE PAGAMENTO|
Digite 1 para pix.
Digite 2 para Cartão de crédito.
Digite 3 para Cartão de débito.
Digite 4 Cheque
`
const metodoDePagamento = prompt(mensagem)

console.log(precoProduto)
console.log(metodoDePagamento)

if(metodoDePagamento == 1 || metodoDePagamento == 2){ 
    const precoFinal = precoProduto * 0.9
    alert(`O preço final do pagamento é R$ ${precoFinal.toFixed(2)}`)
    }else if(metodoDePagamento == 3){
        const precoFinal = precoProduto * 0.9
        const parcelas = parseInt(prompt(`Informe a quantidade de Parcelas`))

        if (parcelas == 1){
            alert(`O preço final do pagamento é R$ ${precoFinal}`)
        }else if (parcelas == 2){
             alert(`O preço final do pagamento é R$ ${precoProduto}`)
        }else if(parcelas>= 3){
            const precoFinal = (precoProduto * 1.1)
            alert(`O preço final do pagamento é R$ ${precoFinal.toFixed(2)}`)
        }

    }




