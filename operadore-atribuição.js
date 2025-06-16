//os operadores de atribuição fazem com que atribuimos um valor a uma variavel já com um calculo

//exemplo

let preco = 10

console.log("O preço inicial é: " + preco)

//suponhamos que quero incluir + 5 nesse preço, um jeito nada pratico seria utilizar o preco++ 5 vezes.

// um outro jeito seria usar preco = preco + 4

//porém tem um jeito mais simples de realizar essa atribuição

//Se, antes do sinal de = colocarmos uma + ficando += cortados a variavel e o sinal ficando como abaixo

preco += 5 //igual a preco = preco + 5

console.log("Utilizando 'preco += 5' o resultado é: " + preco)

//isso pode ser realizado com qualquer operação matematica.