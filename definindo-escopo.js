//sobres espressões aritmeticas

//pela ordem de prioridade da matematica onde a multiplicação tem prioridade sobre a soma

let resultado = 2 * 5 + 5

console.log("Resultado sem determinar o escopo [2 * 5 + 5]: " + resultado)

//definindo um escopo primeiro ele ira realizar a operação dentro dos parenteses, para depois realizar o que está fora

//como no exemplo abaixo:

resultado = 2 * (5 + 5)

console.log("Resultado definindo o escopo [2 * (5 + 5)]: " + resultado)