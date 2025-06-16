// igual

//ao definirmos uma variavel podemos verificar dentro do console log;



//para atribuição  é utilizado um sinal de = para comparar são dois sinais de == e para comparar valor e formato são utilizados três ===

// = é atribuição
// == para comparar valor
// === comparar valor e formato do conteúdo 

let numero = "1"
console.log("usando comparativo de igualdade ===: ")
console.log(numero === 1)

//o resultado deu false, pois embora seja o número 1 dentro da variável está como string e dentro do console log está como number

//Diferente

//!== diferente ?

//podemos criar uma variavel para armazenar essa comparação como vemos abaixo.

//quando guardamos um valor em uma varieavel e comparamos o resultado só será TRUE ou FALSE

console.log("Usando comparativo de diferente !==: ")
let marca = "Apple"
let resultado = marca !== "Samsung"

console.log(resultado)

//exemplo1: verificar se o CPF do usuário é diferente do bloqueado usando === igual

console.log(" ")
console.log("Exemplo de verificação cpf bloqueado:")
console.log("Exemplo 1:")

let cpfBloqueado = "123.445.222-45"

let cpfUsuario = "222.111.222-09"

let ehCPFBloqueado =  cpfUsuario === cpfBloqueado

console.log("O usuário está barrado? " + ehCPFBloqueado)

console.log(" ")

//exemplo2: verificar se o usuário é o autorizado usando !== diferente 

console.log("Exemplo 2:")

let CPFPermitido = "222.555.333-01"
let CPFDoUsuario = "222.555.333.-02"

let CPFBloqueado = CPFDoUsuario !== CPFPermitido

console.log("É um usuário invalido? " + CPFBloqueado)

