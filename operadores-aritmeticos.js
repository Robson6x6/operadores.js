//

let idade = 30;
console.log("O valor da minha variável é: " + idade)

// O sinal de + (mais) pode ser utilizado tanto para realizar operações matematicas, como para concatenar textos fixos com variaveis

//o código ele é sequencial então, qualquer operação realizada na variavel 
// só será refletida ao chegar na linha.

idade = 30 + 6
console.log("operação de adição: " + idade)

// também é possível realizar uma subtração

idade = 30 - 6
console.log("operação de subtração: " + idade)

let codigoDoProduto = 1023
let codigoExato = codigoDoProduto - 1000

console.log(codigoExato)

//nas expressões matematicas não necessariamente dependemos dos numeros diretos.
//podemos utilizar os valores armazenados na variaveis

// Usanado multiplicação
let precoProduto = 100.99
let valorComTaxa = precoProduto * 2

console.log("O valor com taxa é: " + valorComTaxa)

let multiplicador = 4
let multiplicando = 12
let produto = multiplicador * multiplicando

console.log("O valor da multiplicação é: " + produto)

//alteramdo o multiplicador por 8

// se nnão realizarmos a criação da linha referente ao produto o valor não mudará

multiplicador = 8
produto = multiplicador * multiplicando
console.log("O valor da multiplicação é: " + produto)


//realizando divisão
//tipo 1

let notaMercado = 50
console.log("operação de divisão sem duas variaveis: " + notaMercado / 2 )

let pessoasParaDividir = 2
console.log("Operação de divisão com duas variaveis: " + notaMercado / pessoasParaDividir)

//modulo

let calculo = 10 % 3
console.log("para pergarmos o resto da divisão usado a %, ou seja o resto da divisão de 10 / 3 é: " + calculo)
