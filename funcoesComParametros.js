//usando funções com parametros

//precisamos passar uma um parametro dentro da função podemos incluir uma variavel que é o parametro.

//e dentro da chamada de função definimos o valor da variavel, não precisamos incluir o let

//ou seja ao defini, para entrar na fução precisa de um valor

//geralmente usamos parametros quando queremos que uma mesma função ela tenha resultados diferentes

//quando criamos uma variavel dentro de uma função não possível usarmos a variavel fora da função

//alem do let podemos usaro var para criar uma variavel de maneira global

//O que acontece se esquecer de passar algum parametro?

//dependendo da linguagem de programação nem funciona, no js ele apresenta como undefined

//podemos usar um valor default quando isso acontece atribuindo-le um valor
/*torrar("Pão integral", "Robson", 10.90)
torrar("pão de forma", "", 5.90)

function torrar(pao, valor, nome = "Cliente"){
    console.log("torrada feita com: " + pao)
   console.log("pedido de: " + nome)
   console.log("O valor total é: " + valor)
}
*/

//exeemplo mundo real

createStringConnection("db_shuruminho", "robson", 1234)

function createStringConnection(databaseName, user, pass){
    console.log(
        `connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`)
}
